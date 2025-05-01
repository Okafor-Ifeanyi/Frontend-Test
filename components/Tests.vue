<script setup lang="ts">
    import useAuth from "../composables/use-auth"    
    import useGetTest from "../composables/use-gettest"
    import useCreateMedicalRecord from "../composables/use-createMedicalRecords.ts"

    import { useToast } from 'vue-toast-notification'

    const toast = useToast()

    const { data: token, error: useAuthError } = await useAuth("tester@kompletecare.com", "password")
    
    if( useAuthError.value) {
        console.log("Error: ", useAuthError.value)
    } 

    const { data, error } = await useGetTest(token.value)
    
    if( error.value) {
        console.log("Error: ", error.value)
    }

    const x_ray = data._value?.data[0].investigations
 
    const ultrasound = data._value?.data[1].investigations

    const user_input = ref({
        patient: 1,
        investigations: [],
        ct_scan: "",
        mri: "",
        developer: "https://github.com/Okafor-Ifeanyi/"
    })
    
    const notify = async () => {
        await useCreateMedicalRecord(token.value, user_input.value)
        toast.success("Medical Record Created", {
            position: 'top-right',
            duration: 3000,
            dismissible: true
        })
    }

</script>

<template>
    <div class="col-12 col-md-10 d-flex flex-column px-3 py-2 px-md-5 py-md-4 bg-white text-size">
            <div class="mb-4 pb-2 border-bottom border-color">
                <h1 class="fs-6 home-color">X-Ray</h1>
                <div v-if="x_ray" class="d-flex flex-row flex-wrap">
                    
                    <CheckBox
                        v-for="(item) in x_ray"
                        name="x-ray"
                        :id="item.id.toString()"
                        :label="item.title"
                        v-model="user_input.investigations[0]"
                    />

                </div>
            </div>
            <div class="mb-4 pb-2 border-bottom border-color">
                <h1 class="fs-6 home-color">Ultrasound Scan</h1>
                <div v-if="ultrasound" class="d-flex flex-row flex-wrap">
                    
                    <CheckBox
                        v-for="(item) in ultrasound"
                        name="ultrasound"
                        :id="item.id.toString()"
                        :label="item.title"
                        v-model="user_input.investigations[1]"
                    />
                </div>
            </div>

            <div class="container g-0 mt-2 w-100 d-flex justify-content-between text-color">
                <div class="w-40 ">
                    <label for="" class="fs-6">CT Scan</label>
                    <select class="form-select w-100" aria-label="Default select example" v-model="user_input.ct_scan">
                        <option selected class="text-color">*Specify</option>
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                    </select>
                </div>
                
                <div class="w-40 d-flex flex-column align-content-end ">
                    <label for="" class="fs-6">MRI</label>
                    <select class="form-select w-100" aria-label="Default select example" v-model="user_input.mri">
                        <option selected class="text-color">*Specify</option>
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                    </select>

                    
                </div>
            </div>
            <div class="w-100 d-flex justify-content-end">
                <button @click="notify" 
                    class="btn btn-primary btn-lg align-item-end mt-5 fs-6 active-dash-button">
                    Save and Send
                </button>
            </div>
    </div>
</template>
