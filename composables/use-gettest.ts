type Investigation = {
    id: number;
    investigation_type_id: number;
    title: string;
};

type InvestigationCategory = {
    id: number;
    title: string;
    investigations: Investigation[];
};

type InvestigationsResponse = {
    success: boolean;
    data: InvestigationCategory[];
    message: string;
};

export default async function useGetTest(token: string | null) {
    const data = ref<InvestigationsResponse | null>(null)
    // const token = localStorage.getItem('token')
    if(!token) {
        return {
            data: null,
            error: {
                statusCode: 403,
                statusMessage: 'Unauthorized User',
            }
        }
    }
    try {
        data.value = await $fetch<InvestigationsResponse>('https://testdrive.kompletecare.com/api/investigations', 
            { method: 'GET', headers: { Authorization: `Bearer ${token}` } } 
        )

        return  {
            data: data.value,
            error: null
        }
    } catch (err) {
        return {
            data: null,
            error: {
                statusCode: 500,
                statusMessage: (err as Error).message,
            }
        }
    }
}

