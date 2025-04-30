export type Investigation = {
    id: number;
    investigation_type_id: number;
    title: string;
    selected: boolean;
};

export type InvestigationCategory = {
    id: number;
    title: string;
    investigations: Investigation[];
};

export type InvestigationsResponse = {
    success: boolean;
    data: InvestigationCategory[];
    message: string;
};

export type ApiError = { statusCode: number, statusMessage: string }

export default async function useGetTest(token: string | null) {
    const data = ref<InvestigationsResponse | null>(null)
    const error = ref<ApiError | null>(null)

    if(!token) {
        error.value = { statusCode: 403, statusMessage: 'Unauthorized User' }
        return {
            data,
            error
        }
    }
    try {
        data.value = await $fetch<InvestigationsResponse>('https://testdrive.kompletecare.com/api/investigations', 
            { method: 'GET', headers: { Authorization: `Bearer ${token}` } } 
        )

        return  {
            data,
            error
        }
    } catch (err) {
        error.value = { statusCode: 500, statusMessage: (err as Error).message }
        return {
            data,
            error
        }
    }
}