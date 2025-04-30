<template>
    <div class="container-fluid full-height">
      <div class="row h-100">
        <aside class="col-md-3 d-flex flex-column g-0 text-color">
            <section class="bg-white container-fluid g-0 d-flex flex-column mt-60">
                
                <DashButton 
                    text="Dashboard" 
                    :icon="`<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
                        <path fill='currentColor' stroke='currentcolor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                            d='M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 12h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m10-4h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1m0-8h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1'/>
                    </svg>`"/>

                <DashButton 
                    text="Profile" 
                    :icon="`<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
                        <path fill='currentColor' d='M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18' />
                    </svg>`"/>

                <DashButton 
                    text="Services" 
                    :icon="`<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 21 21'>
                        <g fill='currentcolor' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'>
                            <path d='m3.5 7.5l7-4l5.992 3.424A2 2 0 0 1 17.5 8.661v4.678a2 2 0 0 1-1.008 1.737l-5 2.857a2 2 0 0 1-1.984 0l-5-2.857A2 2 0 0 1 3.5 13.339v-2.802' />
                            <path d='M9.552 10.99a2 2 0 0 0 1.896 0L17 8m-6.5 3.5V18' />
                            <path d='m3.5 7.5l7 4l-3 1l-7-4zm7-4l7 4l2-2l-7-4z' />
                        </g>
                    </svg>
                    `"/>

                <DashButton 
                    text="Medical Records" 
                    :icon="`<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 512 512'>
                        <path fill='currentColor' stroke='none' d='M368 48h-11.41a8 8 0 0 1-7.44-5.08A42.18 42.18 0 0 0 309.87 16H202.13a42.18 42.18 0 0 0-39.28 26.92a8 8 0 0 1-7.44 5.08H144a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V112a64 64 0 0 0-64-64m-48.13 64H192.13a16 16 0 0 1 0-32h127.74a16 16 0 0 1 0 32' />
                    </svg>`"/>

                <DashButton 
                    text="Care Wallet" 
                    :icon="`<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 28 28'>
                        <path fill='currentColor' stroke='none' d='M22.901 8.5h-1.958l1.034-1.233a.25.25 0 0 0-.03-.352L19.388 4.77l-3.13 3.73h-1.959l3.94-4.696l-.889-.745a.25.25 0 0 0-.352.03L12.458 8.5H10.5l5.35-6.375a1.75 1.75 0 0 1 2.465-.216l4.596 3.857a1.75 1.75 0 0 1 .215 2.466zM5.5 6h5.79l-1.26 1.5H5.5a1 1 0 0 0 0 2h15.75A3.75 3.75 0 0 1 25 13.25v8A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V8.5A2.5 2.5 0 0 1 5.5 6M18 17.25c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0-.75.75' />
                    </svg>`"/>

                <DashButton 
                    text="Messages" 
                    :icon="`<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
                            <path fill='currentColor' stroke='none' d='M11.953 2.25c-2.317 0-4.118 0-5.52.15c-1.418.153-2.541.47-3.437 1.186c-.92.736-1.35 1.693-1.553 2.9c-.193 1.152-.193 2.618-.193 4.446v.183c0 1.782 0 3.015.2 3.934c.108.495.278.925.545 1.323c.264.392.6.722 1.001 1.042c.631.505 1.375.81 2.254 1V21a.75.75 0 0 0 1.123.65c.586-.335 1.105-.7 1.58-1.044l.304-.221a22 22 0 0 1 1.036-.73c.844-.548 1.65-.905 2.707-.905h.047c2.317 0 4.118 0 5.52-.15c1.418-.153 2.541-.47 3.437-1.186c.4-.32.737-.65 1-1.042c.268-.398.438-.828.546-1.323c.2-.919.2-2.152.2-3.934v-.183c0-1.828 0-3.294-.193-4.445c-.203-1.208-.633-2.165-1.553-2.901c-.896-.717-2.019-1.033-3.437-1.185c-1.402-.151-3.203-.151-5.52-.151z' />
                    </svg>`"/>

                <DashButton 
                    text="Resources" 
                    :icon="`<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 16'>
                        <path fill='currentColor' stroke='none' d='M3.5 2h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5M3 5H1V4h2zm5.5-3h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5M8 5H6V4h2z' />
                        <path fill='currentColor' stroke='none' d='m11.954 2.773l-2.679 1.35a.5.5 0 0 0-.222.671l4.5 8.93a.5.5 0 0 0 .671.222l2.679-1.35a.5.5 0 0 0 .222-.671l-4.5-8.93a.5.5 0 0 0-.671-.222' />
                        <path fill='currentColor' stroke='none' d='M14.5 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0' />
                    </svg>`"/>

            </section>

            <section class=" border-top border-secondary g-0 container-fluid d-flex flex-column">
                <DashButton 
                    text="Account Settings" 
                    :icon="`<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
                        <path fill='currentcolor' stroke='currentColor' fill-rule='evenodd' d='M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8' />
                    </svg>`"/>

                <DashButton 
                    text="Contact Setings" 
                    :icon="`<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
                        <path fill='currentColor'  d='M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M9.1 19.45l1.739-3.942q-.823-.286-1.42-.888q-.598-.6-.888-1.42l-4.02 1.65q.595 1.6 1.795 2.8t2.794 1.8m-.57-8.65q.253-.82.861-1.395Q10 8.829 10.8 8.53L9.15 4.51q-1.62.62-2.82 1.82T4.513 9.15zm3.466 3.892q1.12 0 1.908-.784q.788-.783.788-1.903t-.784-1.909q-.783-.788-1.903-.788t-1.909.784t-.788 1.904t.784 1.908t1.903.788M14.9 19.45q1.575-.6 2.763-1.787T19.45 14.9l-3.942-1.739q-.26.8-.862 1.4t-1.396.908zm.57-8.7l3.98-1.65q-.6-1.575-1.787-2.762T14.9 4.55l-1.65 3.992q.756.317 1.333.878t.886 1.33' />
                    </svg>`"/>

                <DashButton 
                    text="Logout" 
                    :icon="`<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
                        <path fill='none' stroke='currentColor' d='M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z' />
                        <path fill='none' stroke='currentColor' d='m20.65 11.65l-2.79-2.79a.501.501 0 0 0-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7' />
                    </svg>`"/>
                
            </section>
        </aside>
  
        <main class="col-md-9 bg-soft-purple d-flex flex-column p-4">
            <div class="w-100 d-flex flex-row justify-content-between home-color">

                <div class="w-70 d-flex"></div>

                <div class="d-flex flex-row justify-content-between w-30 align-items-center align-bottom" style="height: 40px;">
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
        
            <div class="w-100 d-flex flex-row justify-content-between my-1">
                <div class="w-60 d-flex flex-column">
                    <h1 class="fs-3 home-color">Update Patient Medical Record</h1>
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