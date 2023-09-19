<template>
  <section class="section">
    <div class="container">
      <div class="row bottom-60">
        <div class="col-12">
          <div class="heading heading--center">
            <span class="heading__pre-title">{{$t('body.home.Services')}}</span>
            <h3 class="heading__title">
              {{$t('body.home.Other')}}
              <span class="color--green">{{$t('body.home.Services')}}</span>
            </h3>
            <span class="heading__layout layout--lgray">{{$t('body.home.service')}}</span>
          </div>
        </div>
        <!-- <div class="col-12">
            <div class="heading heading--center"><span class="heading__pre-title">Services</span>
                <h3 class="heading__title">Orther Services</h3><span class="heading__layout">SERVICE</span>
            </div>
        </div>-->
      </div>
      <div class="row offset-50">
        <div class="col-sm-6 col-xl-4">
          <div class="count-item">
            <div class="count-item__img justify-content-center">
              <img width="130" height="130" src="/img/services/dashboard.svg"   alt="icon" />
            </div>
            <h6 class="count-item__title">
              <span class="count-item__count">01</span>
              <span>{{$t('body.home.services1')}}</span>
            </h6>
            <p class="count-item__text">{{$t('body.home.desServices1')}}</p>
            <div class="count-item__inner text-center">
              <a class="button button--green" href="#">
                <span>{{$t('body.home.launch')}}</span>
                <svg class="icon" viewBox="0 0 24 24" id="Isolation_Mode" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.935,16.271l2.78-2.78L0,13.466l0-3,19.7.025L16.935,7.727l2.121-2.12,3.919,3.918a3.5,3.5,0,0,1,0,4.948l-3.919,3.918Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-4">
          <div class="count-item">
            <div class="count-item__img justify-content-center">
              <img width="130" height="130" src="/img/services/live-camera.svg" alt="icon" />
            </div>
            <h6 class="count-item__title">
              <span class="count-item__count">02</span>
              <span>{{$t('body.home.services2')}}</span>
            </h6>
            <p class="count-item__text">{{$t('body.home.desServices2')}}</p>
            <div class="count-item__inner text-center">
              <a class="button button--green" href="#">
                <span>{{$t('body.home.launch')}}</span>
                <svg class="icon" viewBox="0 0 24 24" id="Isolation_Mode" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.935,16.271l2.78-2.78L0,13.466l0-3,19.7.025L16.935,7.727l2.121-2.12,3.919,3.918a3.5,3.5,0,0,1,0,4.948l-3.919,3.918Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-4">
          <div class="count-item">
            <div class="count-item__img justify-content-center">
              <img width="130" height="130" src="/img/services/water-flow.svg" alt="icon" />
            </div>
            <h6 class="count-item__title">
              <span class="count-item__count">03</span>
              <span>{{$t('body.home.services3')}}</span>
            </h6>
            <p class="count-item__text">{{$t('body.home.desServices3')}}</p>
            <div class="count-item__inner text-center">
              <a class="button button--green" href="#">
                <span>{{$t('body.home.launch')}}</span>
                <svg class="icon" viewBox="0 0 24 24" id="Isolation_Mode" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.935,16.271l2.78-2.78L0,13.466l0-3,19.7.025L16.935,7.727l2.121-2.12,3.919,3.918a3.5,3.5,0,0,1,0,4.948l-3.919,3.918Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
};
</script>

<style scoped>
</style>

