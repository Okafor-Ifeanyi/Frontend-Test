type User = {
    email: string
    password: string
}

type ApiResponse = {
    success: boolean
    data: {
        token: string
    }
    message: string
}

type UseAuthReturn = {
    data: Ref<string | null>
    error: Ref<Error | null>
}


export default async function useAuth(email: string, password: string): Promise<UseAuthReturn> {
    let data = ref<string | null>(null)
    let error = ref<Error | null>(null)
    
    try {
        if(!email || !password) {
            throw new Error('Email and password are required.')
        }

        const { data: apiData, error: apiError } = await useFetch<ApiResponse>(
            'https://testdrive.kompletecare.com/api/login',
            { method: 'POST', body: { email, password } }
        )

        if (apiError.value) {
            throw new Error(apiError.value.message || apiError.value.statusMessage)
        }
        if (!apiData.value?.success) {
            throw new Error(apiData.value?.message)
        }

        data.value = apiData.value?.data.token
        
        return {
            data,
            error
        }
    } catch (err) {
        error.value = err as Error
        return {
            data,
            error
        }
    }
}