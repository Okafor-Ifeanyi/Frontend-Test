type User = {
    email: string
    password: string
}

type Response = {
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
        
        const res = await $fetch<Response>('https://testdrive.kompletecare.com/api/login', 
            { method: 'POST', body: { email, password } } 
        )
        if (!res.success) {
            throw new Error(res.message)
        }

        data.value = res.data.token
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