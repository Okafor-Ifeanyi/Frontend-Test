<script setup lang="ts">
    import useAuth from "../composables/use-auth"    
    import useGetTest from "../composables/use-gettest"

    const { data: token, error: useAuthError } = await useAuth("tester@kompletecare.com", "password")

    if( useAuthError.value) {
        console.log("Error: ", useAuthError.value)
    } 

    const { data, error } = await useGetTest(token.value)
    
    
    if( error.value) {
        console.log("Error: ", error.value)
    }
    const x_ray = data._value.data[0].investigations
    const ultrasound = data._value.data[1].investigations

    const showToast = () => {
        console.log("Clicked")
        const toast = useNuxtApp().$toast
        const instance = toast.open('You did it!')

        // Dismiss the specific toast
        instance.dismiss()

        // Or clear all toasts
        // toast.clear()
    }
</script>

<template>
    <div class="w-90 d-flex flex-column px-5 py-4 bg-white text-size">
            <div class="mb-4 pb-2 border-bottom border-color">
                <h1 class="fs-6 home-color">X-Ray</h1>
                <div v-if="x_ray" class="d-flex flex-row flex-wrap">
                    
                    <CheckBox
                        v-for="(item) in x_ray"
                        :id="item.id.toString()"
                        :label="item.title"
                        v-model=item.selected
                    />

                </div>
            </div>
            <div class="mb-4 pb-2 border-bottom border-color">
                <h1 class="fs-6 home-color">Ultrasound Scan</h1>
                <div v-if="ultrasound" class="d-flex flex-row flex-wrap">
                    
                    <CheckBox
                        v-for="(item) in ultrasound"
                        :id="item.id.toString()"
                        :label="item.title"
                        v-model=item.selected
                    />
                </div>
            </div>

            <div class="container g-0 mt-2 w-100 d-flex justify-content-between text-color">
                <div class="w-40 ">
                    <label for="" class="fs-6">CT Scan</label>
                    <select class="form-select w-100" aria-label="Default select example">
                        <option selected class="text-color">*Specify</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                
                <div class="w-40 d-flex flex-column align-content-end ">
                    <label for="" class="fs-6">MRI</label>
                    <select class="form-select w-100" aria-label="Default select example">
                        <option selected class="text-color">*Specify</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    
                </div>
            </div>
            <div class="w-100 d-flex justify-content-end">
                <button @click="showToast" 
                    class="btn btn-primary btn-lg align-item-end mt-5 fs-6">
                    Save and Send
                </button>
            </div>
    </div>
</template>
