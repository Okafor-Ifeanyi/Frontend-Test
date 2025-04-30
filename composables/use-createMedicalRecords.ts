import { ref, type Ref } from 'vue'

type UserInput = {
  patient: number
  investigations: []
  ctscan: string
  mri: string
  developer: string
}

type medicalRecord = {
  success: boolean
  data: {
    patient: {
      id: number
      name: string
      email: string
    }
    ctscan: string
    mri: string
    created_at: string
  }
  message: string
}

type UseAuthReturn = {
  data: Ref<string | null>
  error: Ref<Error | null>
}

export default async function useCreateMedicalRecord(token: string, body: UserInput): Promise<UseAuthReturn> {
  const data = ref<string | null>(null)
  const error = ref<Error | null>(null)

  try {
    if (!body) {
      throw new Error('user input required.')
    }

    const apiData = await $fetch<medicalRecord>('https://testdrive.kompletecare.com/api/investigations', {
      method: 'POST',
      body: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!apiData.success) {
      throw new Error(apiData.message)
    }

    console.log('apiData.data', apiData.data)
    data.value = 'Medical record created successfully.'

  } catch (err) {
    error.value = err as Error
  }

  return {
    data,
    error,
  }
}