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

export default async function useAuth(email: string, password: string) {
    if(!email || !password) {
        return {
            data: null,
            error: {
                statusCode: 401,
                statusMessage: 'No recipient or body provided',
            }
        }
    }
    try {
        const data = await $fetch<Response>('https://testdrive.kompletecare.com/api/login', 
            { method: 'POST', body: { email, password } } 
        )

        localStorage.setItem('token', data.data.token)
        return  {
            data: data.data.token,
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

