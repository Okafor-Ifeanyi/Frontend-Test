<script setup lang="ts">
    import useAuth from "../composables/use-auth"    
    import useGetTest from "../composables/use-gettest"

    const { data: token, error: useAuthError } = await useAuth("tester@kompletecare.com", "password")

    if( useAuthError.value) {
        console.log("Error: ", useAuthError.value)
    } 

    const { data, error } = await useGetTest(token.value)

    if(!data) {
        throw new Error("No data found");
    }
    
    const x_ray = data.data[0].investigations
    const ultrasound = data.data[1].investigations

</script>

<template>
    <div class="w-90 d-flex flex-column px-5 py-4 bg-white">
            <div class="mb-4 pb-2 border-bottom border-color">
                <h1 class="fs-5 home-color">X-Ray</h1>
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
                <h1 class="fs-5 home-color">Ultrasound Scan</h1>
                <div v-if="ultrasound" class="d-flex flex-row flex-wrap">
                    
                    <CheckBox
                        v-for="(item) in ultrasound"
                        :id="item.id.toString()"
                        :label="item.title"
                        v-model=item.selected
                    />
                </div>
            </div>
            <div></div>
    </div>
</template>