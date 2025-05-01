<template>
    <div class="container-fluid full-height">
      <div class="row h-100">
        <aside class="d-none d-md-flex col-md-3 d-flex flex-column g-0 text-color">
            <Sidebar />
        </aside>
  
        <main class="col-md-9 bg-soft-purple d-flex flex-column p-4">
            <div class="w-100 d-flex flex-row justify-content-between home-color">

                <div class="w-30 w-md-70 d-flex"></div>

                <div class="d-flex flex-row justify-content-between col-8 col-md-4 align-items-center align-bottom" style="height: 40px;">
                    <p class="m-0">Take a tour</p>
                    <div class="d-flex flex-row position-relative">
                        <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentcolor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                        </svg>
                        <span class="position-absolute top-0 end-0 bg-danger rounded-circle border border-white" style="width: 10px; height: 10px; border-width: 10px;"></span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentcolor" d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22m7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A1 1 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a1 1 0 0 0-.293-.707z" />
                        </svg>
                    <img src="../assets/images/45A4B2D9-DA89-46C1-8013-60FF568283AB_1_105_c.jpeg" alt="" class="profile-pic">
                </div>
            </div>
        
            <div class="w-100 d-flex flex-row justify-content-between my-4 my-md-1">
                <div class="w-80 col-md-9 d-flex flex-column">
                    <h1 class="fs-4 home-color">Update Patient Medical Record</h1>
                    <p class="fw-light text-size text-color">Click the tabs to view and edit patient medical details</p>
                </div>

          </div>
        
          <!-- <ClientOnly > -->
            <Tests />
          <!-- </ClientOnly> -->

        </main>
      </div>
    </div>
</template>