export const rawHtml = `
    <a href="#top" class="sr-only sr-only--focusable">    Skip to main content
</a>
    <div class="
        preloader
        
        is-hidden        js-preloader-transition
        is-hidden--print
        is-hidden--no-js
    " aria-hidden="true" data-nosnippet="" data-plugin="preloader">
      <div class="preloader__content ui-dark ui-background">
      </div>
    </div>
    <div class="
        preloader
        preloader--landing
                
                js-preloader
        is-hidden--print
        is-hidden--no-js
    " data-nosnippet="" data-plugin="preloaderLanding" data-preloader-landing-min-delay="1500">
      <div class="preloader__progress">
      </div>
      <div class="preloader__content ui-light ui-background">
        <svg class="preloader__content-logo preloader__content-logo--1 is-hidden--sm-down" width="1420" height="140" viewBox="0 0 1420 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.3666 86.4578L67.3714 16.4163H70.5558L97.5605 86.4578H40.3666ZM118.269 140H138L83.9176 0H54.0095L0 140H19.7306L34.0603 102.947H103.992L118.259 140H118.269Z" fill="black">
          </path>
        </svg>
        <svg class="preloader__content-logo preloader__content-logo--2 is-hidden--sm-down" width="1420" height="140" viewBox="0 0 1420 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M720 0H700V140H720V0Z" fill="black">
          </path>
        </svg>
        <svg class="preloader__content-logo preloader__content-logo--3 is-hidden--sm-down" width="1420" height="140" viewBox="0 0 1420 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1321.61 16.4895H1368.6C1383.39 16.4895 1395.41 28.4913 1395.41 43.2499C1395.41 58.0086 1383.39 70.0104 1368.6 70.0104H1321.61V16.4895ZM1420 140L1377.09 86.1371C1398.52 83.515 1415.1 65.3154 1415.1 43.2396C1415.1 19.3811 1395.68 0 1371.78 0H1302V139.917H1321.69V86.4066H1352.85L1395.47 139.917H1420V139.99V140Z" fill="black">
          </path>
        </svg>
        <svg class="preloader__content-logo preloader__content-logo--1 is-hidden--md-up" width="350" height="80" viewBox="0 0 350 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.0667 49.4044L38.4979 9.38074H40.3176L55.7489 49.4044H23.0667ZM67.5825 80H78.8571L47.9529 0H30.8626L0 80H11.2746L19.463 58.8267H59.4238L67.5765 80H67.5825Z" fill="black">
          </path>
        </svg>
        <svg class="preloader__content-logo preloader__content-logo--2 is-hidden--md-up" width="350" height="80" viewBox="0 0 350 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M180.429 0H169V80H180.429V0Z" fill="black">
          </path>
        </svg>
        <svg class="preloader__content-logo preloader__content-logo--3 is-hidden--md-up" width="350" height="80" viewBox="0 0 350 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M293.809 9.42256H320.658C329.107 9.42256 335.978 16.2807 335.978 24.7142C335.978 33.1478 329.107 40.0059 320.658 40.0059H293.809V9.42256ZM350.029 80L325.511 49.2212C337.752 47.7228 347.228 37.3231 347.228 24.7083C347.228 11.0749 336.132 0 322.473 0H282.6V79.9526H293.85V49.3752H311.657L336.014 79.9526H350.029V79.9941V80Z" fill="black">
          </path>
        </svg>
      </div>
    </div>
    <div class="page-content-wrapper ui-light-background" data-barba="container" data-barba-namespace="page" data-plugin="
                        utmSave

                                ">
      <header class="header is-hidden--print header--fixed ui-light" data-plugin="themed ">
        <div class="header__background">
        </div>
        <div class="header__content container-h py-layout">
          <div class="group group--nav group--between header__nav">
            <a class="btn btn--primary btn--sm header__nav-last js-modal-toggle " href="#menu" aria-label="Открыть меню">            <span class="btn__content">            <span class="btn__icon">            <span class="icon icon-menu">            <span></span>
            <span></span>
</span>
            <svg class="icon icon-close icon-menu-close" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
              <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#close" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#close">
              </use>
            </svg>
</span>
</span>
</a>
            <a class="btn btn--secondary btn--square btn--sm header__nav-first is-hidden--md-up " href="#favourites" aria-label="Favorites">            <span class="btn__content">            <span class="btn__icon" data-plugin="favouriteCounter">            <script type="text/template">
              &lt;%= icon(count ? &#39;favourite-not-empty&#39; : &#39;favourite&#39;, { width: 20, height: 20 }) %&gt;
                        &lt;span class=&#34;btn__icon-text text-tiny leading-trim&#34;&gt;&lt;%- count &gt; 9 ? &#39;9+&#39; : (count ? count : &#39;&#39;) %&gt;&lt;/span&gt;
            </script>
</span>
</span>
</a>
            <a class="btn-group btn-group--gap btn-container header__nav-first is-hidden--sm-down" aria-label="Favorites" href="#favourites">            <span class="btn btn--secondary btn--square btn--sm ">            <span class="btn__content">            <span class="btn__icon ">            <svg class="icon icon-favourite" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
              <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#favourite" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#favourite">
              </use>
            </svg>
</span>
</span>
</span>
            <span class="btn btn--secondary btn--square btn--sm is-hidden js-favourite-counter-wrapper " data-plugin="favouriteCounter" data-favourite-counter-wrapper-inactive-class="is-hidden">            <span class="btn__content">            <span class="btn__text ">            0
</span>
</span>
</span>
</a>
            <a class="btn btn--primary btn--sm btn--rotation header__nav-wide-button group__right is-hidden--sm-down " href="/offices">            <span class="btn__content">            <span class="btn__text ">            Réserver un chauffeur
</span>
            <span class="btn__icon ">            <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
              <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
              </use>
            </svg>
</span>
</span>
</a>
          </div>
        </div>
      </header>
      <div class="page-content-wrapper__inner js-page-content-wrapper">
        <div class="page-content js-page-content">
          <main id="top" class="page-content__overflow-fix">
            <div class="section section--top ui-light l-intro-logo" data-scroll-section="">
              <div class="sticky sticky--full-height sticky--under-next">
                <div class="sticky__layer sticky__layer--sticky" data-scroll="" data-scroll-sticky="">
                  <svg class="l-intro-logo__logo is-hidden--sm-down" width="1420" height="140" viewBox="0 0 1420 140" fill="none" xmlns="http://www.w3.org/2000/svg" data-plugin="parallax" data-parallax-pattern="landingIntroLogoA">
                    <text x="10" y="110" fill="white" font-family="Cinzel" font-size="120" font-weight="bold">CÉDRIC</text>
                  </svg>
                  <svg class="l-intro-logo__logo is-hidden--sm-down" width="1420" height="140" viewBox="0 0 1420 140" fill="none" xmlns="http://www.w3.org/2000/svg" data-plugin="parallax" data-parallax-pattern="landingIntroLogoI">
                    <text x="680" y="110" fill="white" font-family="Cinzel" font-size="120" font-weight="light">•</text>
                  </svg>
                  <svg class="l-intro-logo__logo is-hidden--sm-down" width="1420" height="140" viewBox="0 0 1420 140" fill="none" xmlns="http://www.w3.org/2000/svg" data-plugin="parallax" data-parallax-pattern="landingIntroLogoR">
                    <text x="1250" y="110" fill="white" font-family="Cinzel" font-size="120" font-weight="light">VTC</text>
                  </svg>
                  <svg class="l-intro-logo__logo is-hidden--md-up" width="350" height="80" viewBox="0 0 350 80" fill="none" xmlns="http://www.w3.org/2000/svg" data-plugin="parallax" data-parallax-enable-mq="sm-down" data-parallax-pattern="landingIntroLogoAMobile">
                    <text x="5" y="65" fill="white" font-family="Cinzel" font-size="60" font-weight="bold">CÉDRIC</text>
                  </svg>
                  <svg class="l-intro-logo__logo is-hidden--md-up" width="350" height="80" viewBox="0 0 350 80" fill="none" xmlns="http://www.w3.org/2000/svg" data-plugin="parallax" data-parallax-enable-mq="sm-down" data-parallax-pattern="landingIntroLogoIMobile">
                    <text x="170" y="65" fill="white" font-family="Cinzel" font-size="60" font-weight="light">•</text>
                  </svg>
                  <svg class="l-intro-logo__logo is-hidden--md-up" width="350" height="80" viewBox="0 0 350 80" fill="none" xmlns="http://www.w3.org/2000/svg" data-plugin="parallax" data-parallax-enable-mq="sm-down" data-parallax-pattern="landingIntroLogoRMobile">
                    <text x="260" y="65" fill="white" font-family="Cinzel" font-size="60" font-weight="light">VTC</text>
                  </svg>
                </div>
              </div>
            </div>
            <section class="section section--no-margin section--full-height section--no-overflow-clip ui-light ui-background" data-scroll-section="" data-themed-class="ui-light" data-scroll-snap-point="[
        { &#34;viewport&#34;: 0, &#34;element&#34;: 0 },
        { &#34;viewport&#34;: 0, &#34;element&#34;: 100 }
    ]">
              <h1 class="sr-only">
                Cédric VTC — Chauffeur Privé de Prestige à Paris
              </h1>
              <div class="sticky sticky--full-height sticky--under-next">
                <div class="sticky__layer sticky__layer--sticky" data-scroll="" data-scroll-sticky="" data-plugin="parallax" data-parallax-enable-mq="null" data-parallax-0-0="{&#34;opacity&#34;: 1}" data-parallax--80-0="{&#34;opacity&#34;: 0}">
                  <div class="l-intro-background-mobile background background--top is-hidden--md-up" data-plugin="iframeSize" style=" --iframe-ratio: 0.81263940520446; --aspect-ratio: 1093 / 1345">
                    <picture class="background__placeholder img-cover" data-plugin="lazy" draggable="false">
                      <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/landing/1.intro/placeholder@xs.webp?v=1781014343" alt="" style="--aspect-ratio: auto 780 / 1320; --ratio: 0.59090909090909;" fetchpriority="high" />
                    </picture>
                    <iframe width="1093" height="1345" src="https://player.vimeo.com/video/1145256182?loop=1&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;background=1" allow="autoplay; encrypted-media" allowfullscreen="" title="Vimeo video" loading="lazy" data-plugin="lazy" onload="this.complete = true">
                    </iframe>
                  </div>
                  <div class="background background--cover is-hidden--sm-down" data-plugin="iframeSize" style=" --iframe-ratio: 1.8888888888889; --aspect-ratio: 1428 / 756">
                    <picture class="background__placeholder img-cover" data-plugin="lazy" draggable="false">
                      <source srcset="https://aircenter.space/assets/images/media/landing/1.intro/placeholder@xxxl.webp?v=1781014343" media="(min-width: 1920px) and (min-height: 700px)" />
                      <source srcset="https://aircenter.space/assets/images/media/landing/1.intro/placeholder@xxl.webp?v=1781014343" media="(min-width: 1440px) and (min-height: 700px)" />
                      <source srcset="https://aircenter.space/assets/images/media/landing/1.intro/placeholder@md.webp?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                      <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/landing/1.intro/placeholder@xs.webp?v=1781014343" alt="" style="--aspect-ratio: var(--xxxl, auto 2563 / 1370) var(--n-xxxl, var(--xxl, auto 2016 / 1078) var(--n-xxl, var(--md, auto 1440 / 770) var(--n-md, auto 780 / 1320))); --ratio: var(--xxxl, 1.870802919708) var(--n-xxxl, var(--xxl, 1.8701298701299) var(--n-xxl, var(--md, 1.8701298701299) var(--n-md, 0.59090909090909)));" fetchpriority="high" />
                    </picture>
                    <iframe width="1428" height="756" src="https://player.vimeo.com/video/1145251536?loop=1&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;background=1" allow="autoplay; encrypted-media" allowfullscreen="" title="Vimeo video" loading="lazy" data-plugin="lazy" onload="this.complete = true">
                    </iframe>
                  </div>
                </div>
                <div class="sticky__layer l-intro" data-plugin="parallax" data-parallax-pattern="landingIntroMove landingIntroMoveMobile">
                  <div class="container-h l-intro__content" data-plugin="parallax" data-parallax-pattern="landingIntroFade">
                    <div>
                      <div class="l-intro__content-subtitle">
                        <p class="h2 leading-trim text-center js-intro-text">
                          The architecture
                          <br />
                          of New Success
                          <br />
                        </p>
                      </div>
                      <svg class="img-full is-hidden--md-up is-invisible" xmlns="http://www.w3.org/2000/svg" width="351" height="80" viewBox="0 0 351 80" fill="none">
                      </svg>
                    </div>
                    <div class="l-intro__content-text mt-5 mt-0:md js-intro-text">
                      <p class="leading-trim text-center">
                        Class (A)
                        <br />
                        premium business
                        <br />
                        center
                      </p>
                    </div>
                  </div>
                  <div class="px-layout py-layout l-intro__next">
                    <a class="btn btn--secondary btn--sm btn--square " href="#impulse" aria-label="The momentum to rise higher">                    <span class="btn__content">                    <span class="btn__icon ">                    <svg class="icon icon-arrow-down" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
                      <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#arrow-down" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#arrow-down">
                      </use>
                    </svg>
</span>
</span>
</a>
                  </div>
                </div>
              </div>
            </section>
            <section id="impulse" class="section section--no-margin section--no-overflow-clip ui-light ui-background" data-scroll-section="" data-themed-class="ui-light" data-plugin="reveal">
              <picture class="img-full l-impsulse-intro" data-reveal="image-in-fullscreen" data-reveal-visible="true" data-plugin="lazy" draggable="false">
                <source srcset="https://aircenter.space/media/cache/homepage_impulse_bg_xxxl/assets/images/media/landing/2.impulse/background%40xxxl.webp" media="(min-width: 1920px) and (min-height: 700px)" />
                <source srcset="https://aircenter.space/media/cache/homepage_impulse_bg_xxl/assets/images/media/landing/2.impulse/background%40xxxl.webp" media="(min-width: 1440px) and (min-height: 700px)" />
                <source srcset="https://aircenter.space/media/cache/homepage_impulse_bg_md/assets/images/media/landing/2.impulse/background%40xxxl.webp" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                <img draggable="false" loading="lazy" src="https://aircenter.space/media/cache/homepage_impulse_bg_xs/assets/images/media/landing/2.impulse/background%40xs.webp" alt="" style="--aspect-ratio: var(--xxxl, auto 2599 / 1356) var(--n-xxxl, var(--xxl, auto 2044 / 1066) var(--n-xxl, var(--md, auto 1460 / 762) var(--n-md, auto 780 / 780))); --ratio: var(--xxxl, 1.9166666666667) var(--n-xxxl, var(--xxl, 1.9174484052533) var(--n-xxl, var(--md, 1.9160104986877) var(--n-md, 1)));" data-plugin="parallax" data-parallax-pattern="landingImpulseIntroImage" />
              </picture>
              <div class="container-h mt-layout">
                <h2 class="h1 group group--between group:md" data-reveal="text">
                  <span class="leading-trim">                  The momentum
</span>
                  <span class="leading-trim">                  to rise higher
</span>
                </h2>
                <p class="l-impsulse-text leading-trim text-center mt-8 mt-6:md" data-reveal="text">
                  AIR is a new generation of offices that
                  <br />
                  brings a new level of premium quality and
                  <br />
                  style to Class A business real estate.
                </p>
              </div>
              <div class="sticky sticky--under-next l-impsulse-card container-css-vars-h">
                <div class="sticky__layer sticky__layer--sticky l-impsulse-card__sticky" data-scroll="" data-scroll-sticky="" data-plugin="stickyBottom" data-sticky-bottom-enable-mq="sm-down">
                  <div class="container-h pb-12 pb-layout:md" data-plugin="parallax" data-parallax-pattern="sectionToSticky">
                    <div class="row row--pad">
                      <div class="col col--xs-12 col--md-6 col--order-last-md">
                        <div class="l-impulse-card-images">
                          <picture class="img-full img-rounded parallax-image-move" data-reveal="image-in" data-plugin="lazy" draggable="false">
                            <source srcset="https://aircenter.space/media/cache/homepage_impulse_slider_img_xxxl/assets/images/media/landing/2.impulse/image-1%40xxxl.webp" media="(min-width: 1920px) and (min-height: 700px)" />
                            <source srcset="https://aircenter.space/media/cache/homepage_impulse_slider_img_xxl/assets/images/media/landing/2.impulse/image-1%40xxxl.webp" media="(min-width: 1440px) and (min-height: 700px)" />
                            <source srcset="https://aircenter.space/media/cache/homepage_impulse_slider_img_md/assets/images/media/landing/2.impulse/image-1%40xxxl.webp" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                            <img draggable="false" loading="lazy" src="https://aircenter.space/media/cache/homepage_impulse_slider_img_xs/assets/images/media/landing/2.impulse/image-1%40xxxl.webp" alt="" style="--aspect-ratio: auto 1500 / 1500; --ratio: 1;" data-plugin="parallax" data-parallax-pattern="landingImpulseImageImageFirst" />
                          </picture>
                          <picture class="img-full img-rounded parallax-image-move" data-parallax-pattern="landingImpulseImageClipMobile landingImpulseImageClip" data-plugin="lazy parallax" draggable="false">
                            <source srcset="https://aircenter.space/media/cache/homepage_impulse_slider_img_xxxl/assets/images/media/landing/2.impulse/image-2%40xxxl.webp" media="(min-width: 1920px) and (min-height: 700px)" />
                            <source srcset="https://aircenter.space/media/cache/homepage_impulse_slider_img_xxl/assets/images/media/landing/2.impulse/image-2%40xxxl.webp" media="(min-width: 1440px) and (min-height: 700px)" />
                            <source srcset="https://aircenter.space/media/cache/homepage_impulse_slider_img_md/assets/images/media/landing/2.impulse/image-2%40xxxl.webp" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                            <img draggable="false" loading="lazy" src="https://aircenter.space/media/cache/homepage_impulse_slider_img_xs/assets/images/media/landing/2.impulse/image-2%40xxxl.webp" alt="" style="--aspect-ratio: auto 1500 / 1500; --ratio: 1;" data-plugin="parallax" data-parallax-pattern="landingImpulseImageImageSecond" />
                          </picture>
                        </div>
                      </div>
                      <div class="col col--xs-12 col--md-6 l-impulse-card-content pt-4 pt-0:md">
                        <p class="h2 leading-trim text-color-heading" data-reveal="text">
                          <span class="text-offset text-offset--2 is-hidden--sm-down"></span>
                          Efficient layouts and premium infrastructure, panoramic glazing and impressive views, luxurious lobbies, and forward-looking faсades set a new benchmark for business environment.
                        </p>
                        <p class="leading-trim mt-4" data-reveal="text">
                          At this level,
                          <br />
                          AIR has no competitors.
                        </p>
                        <div class="row row--pad l-impulse-card-content__end">
                          <div class="col col--xs-6 col--md-4 offset--xs-6 offset--md-8">
                            <a class="btn btn--secondary btn--vertical-between btn--rotation btn--full " href="/about">                            <span class="btn__content">                            <span class="btn__text ">                            About the project
</span>
                            <span class="btn__icon ">                            <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                              <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                              </use>
                            </svg>
</span>
</span>
</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="section-fade-overlay ui-dark ui-background" data-plugin="parallax" data-parallax-clamp="true" data-parallax-enable-mq="null" data-parallax-measure-selector=".section" data-parallax-100-100="{&#34;opacity&#34;: 0}" data-parallax-0-100="{&#34;opacity&#34;: 0.5}">
              </div>
            </section>
            <section id="format" class="section section--no-overflow-clip ui-light ui-background" data-scroll-section="" data-themed-class="ui-light" data-plugin="reveal">
              <div class="container-h pt-layout mb-4">
                <h2 class="h1 group group--between group:md" data-reveal="text">
                  <span class="leading-trim">                  A new
</span>
                  <span class="leading-trim">                  premium
</span>
                  <span class="leading-trim">                  format
</span>
                </h2>
                <p class="leading-trim text-center mt-8" data-reveal="text">
                  AIR is not only a new generation of
                  <br />
                  offices but also a strong architectural
                  <br />
                  statement by ADM architects.
                </p>
              </div>
              <picture class="img-full img-rounded l-format-image ui-background" data-parallax-pattern="landingFormatImageWrapper" data-reveal="image-in-fullscreen" data-reveal-visible="true" data-plugin="lazy parallax" draggable="false">
                <source srcset="https://aircenter.space/media/cache/homepage_format_bg_xxxl/assets/images/media/landing/3.format/background%40xxxl.webp" media="(min-width: 1920px) and (min-height: 700px)" />
                <source srcset="https://aircenter.space/media/cache/homepage_format_bg_xxl/assets/images/media/landing/3.format/background%40xxxl.webp" media="(min-width: 1440px) and (min-height: 700px)" />
                <source srcset="https://aircenter.space/media/cache/homepage_format_bg_md/assets/images/media/landing/3.format/background%40xxxl.webp" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                <img draggable="false" loading="lazy" src="https://aircenter.space/media/cache/homepage_format_bg_xs/assets/images/media/landing/3.format/background%40xs.webp" alt="" style="--aspect-ratio: var(--xxxl, auto 2599 / 2655) var(--n-xxxl, var(--xxl, auto 2044 / 2088) var(--n-xxl, var(--md, auto 1460 / 1492) var(--n-md, auto 700 / 700))); --ratio: var(--xxxl, 0.9789077212806) var(--n-xxxl, var(--xxl, 0.97892720306513) var(--n-xxl, var(--md, 0.97855227882038) var(--n-md, 1)));" data-plugin="parallax" data-parallax-pattern="landingFormatImage landingFormatImageScale" />
              </picture>
              <div class="sticky sticky--full-height sticky--under-next l-format-section" style="--items-count: 2;">
                <div class="sticky__layer sticky__layer--sticky" data-scroll="" data-scroll-sticky="">
                  <div class="l-format-section__background" data-plugin="parallax" data-parallax-pattern="landingFormatBackground sectionToSticky sectionFromStickyHalfUnderNext">
                    <div class="background background--cover is-hidden--md-up" data-plugin="iframeSize" style=" --iframe-ratio: 0.81263940520446; --aspect-ratio: 1093 / 1345">
                      <picture class="background__placeholder img-cover" data-plugin="lazy" draggable="false">
                        <source srcset="https://aircenter.space/assets/images/media/landing/3.format/placeholder@xxxl.webp?v=1781014343" media="(min-width: 1920px) and (min-height: 700px)" />
                        <source srcset="https://aircenter.space/assets/images/media/landing/3.format/placeholder@xxl.webp?v=1781014343" media="(min-width: 1440px) and (min-height: 700px)" />
                        <source srcset="https://aircenter.space/assets/images/media/landing/3.format/placeholder@md.webp?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                        <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/landing/3.format/placeholder@xs.webp?v=1781014343" alt="" style="--aspect-ratio: var(--xxxl, auto 2599 / 1709) var(--n-xxxl, var(--xxl, auto 2044 / 1344) var(--n-xxl, var(--md, auto 1460 / 960) var(--n-md, auto 780 / 960))); --ratio: var(--xxxl, 1.5207723815097) var(--n-xxxl, var(--xxl, 1.5208333333333) var(--n-xxl, var(--md, 1.5208333333333) var(--n-md, 0.8125)));" />
                      </picture>
                      <iframe width="1093" height="1345" src="https://player.vimeo.com/video/1145256699?loop=1&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;background=1" allow="autoplay; encrypted-media" allowfullscreen="" title="Vimeo video" loading="lazy" data-plugin="lazy" onload="this.complete = true">
                      </iframe>
                    </div>
                    <div class="background background--cover is-hidden--sm-down" data-plugin="iframeSize" style=" --iframe-ratio: 1.8888888888889; --aspect-ratio: 1428 / 756">
                      <picture class="background__placeholder img-cover" data-plugin="lazy" draggable="false">
                        <source srcset="https://aircenter.space/assets/images/media/landing/3.format/placeholder@xxxl.webp?v=1781014343" media="(min-width: 1920px) and (min-height: 700px)" />
                        <source srcset="https://aircenter.space/assets/images/media/landing/3.format/placeholder@xxl.webp?v=1781014343" media="(min-width: 1440px) and (min-height: 700px)" />
                        <source srcset="https://aircenter.space/assets/images/media/landing/3.format/placeholder@md.webp?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                        <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/landing/3.format/placeholder@xs.webp?v=1781014343" alt="" style="--aspect-ratio: var(--xxxl, auto 2599 / 1709) var(--n-xxxl, var(--xxl, auto 2044 / 1344) var(--n-xxl, var(--md, auto 1460 / 960) var(--n-md, auto 780 / 960))); --ratio: var(--xxxl, 1.5207723815097) var(--n-xxxl, var(--xxl, 1.5208333333333) var(--n-xxl, var(--md, 1.5208333333333) var(--n-md, 0.8125)));" />
                      </picture>
                      <iframe width="1428" height="756" src="https://player.vimeo.com/video/1145253326?loop=1&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;background=1" allow="autoplay; encrypted-media" allowfullscreen="" title="Vimeo video" loading="lazy" data-plugin="lazy" onload="this.complete = true">
                      </iframe>
                    </div>
                  </div>
                </div>
                <div class="sticky__layer sticky__layer--sticky sticky__layer--top" data-scroll="" data-scroll-sticky="" data-plugin="cursor">
                  <div class="container-h" data-plugin="parallax" data-parallax-pattern="sectionToSticky">
                    <div class="row row--pad">
                      <div class="col col--xs-12 col--md-4 offset--md-6">
                        <div data-plugin="contentAnimation parallax" data-content-animation-animations="{
                                &#34;changeShow&#34;: {&#34;name&#34;: &#34;text&#34;, &#34;delay&#34;: 0.25},
                                &#34;changeHide&#34;: {&#34;name&#34;: &#34;textOut&#34;}
                            }" data-content-animation-plugins="controller events counter sticky" data-content-animation-counter-selector=":root .js-format-counter .js-content-animation-counter" data-content-animation-progress-selector=":root .js-format-progress-item" data-parallax-pattern="sectionFromStickyHalfUnderNext">
                          <div class="p-relative is-hidden--sm-down">
                            <div class="text-tint text-tint--left l-format-section__tint">
                            </div>
                          </div>
                          <div class="content-animation">
                            <div data-content-animation-item="0" class=" l-format-section__item" aria-hidden="false" data-reveal="text">
                              <p class="leading-trim">
                                Three towers ranging from 14 to 34 floors reflect the dynamic character of office life through their expressive forms. They symbolize one of the capital’s key business districts
                              </p>
                            </div>
                            <div data-content-animation-item="1" class="is-hidden l-format-section__item" aria-hidden="true">
                              <p class="leading-trim">
                                The smooth rotation of the facades around a central axis adds movement and energy to the overall silhouette. The rotational effect creates a distinctive architectural rhythm.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="counter cursor cursor--hidden cursor--counter is-hidden--no-hover js-format-counter js-cursor-button">
                    <div class="counter__progress">
                      <div class="counter__progress-bar" data-plugin="parallax" data-parallax-measure-selector=".sticky" data-parallax-0-0="{&#34;transform&#34;: &#34;translateX(-100%)&#34;}" data-parallax-200-100="{&#34;transform&#34;: &#34;translateX(0%)&#34;}" data-parallax-clamp="true">
                      </div>
                    </div>
                    <p class="text-small leading-trim">
                      <span class="js-content-animation-counter text-color-heading">                      1
</span>
                      /  2
                    </p>
                  </div>
                </div>
                <div class="sticky__layer sticky__layer--sticky l-format-section__nav js-format-counter is-hidden--hover" data-scroll="" data-scroll-sticky="">
                  <div class="container-h pb-layout pb-3:md" data-plugin="parallax" data-parallax-pattern="sectionToSticky sectionFromStickyHalfUnderNext">
                    <div class="row row--pad">
                      <div class="col col--xs-12 col--md-1 offset--md-10" data-plugin="parallax" data-parallax-pattern="landingFormatCounter">
                        <div class="counter is-hidden--sm-down">
                          <div class="counter__progress">
                            <div class="counter__progress-bar" data-plugin="parallax" data-parallax-measure-selector=".sticky" data-parallax-0-0="{&#34;transform&#34;: &#34;translateX(-100%)&#34;}" data-parallax-200-100="{&#34;transform&#34;: &#34;translateX(0%)&#34;}" data-parallax-clamp="true">
                            </div>
                          </div>
                          <p class="text-small leading-trim">
                            <span class="js-content-animation-counter text-color-heading">                            1
</span>
                            /  2
                          </p>
                        </div>
                        <div class="progress-bar is-hidden--md-up">
                          <div class="progress-bar__item">
                            <div class="progress-bar__item-inner js-format-progress-item">
                            </div>
                          </div>
                          <div class="progress-bar__item">
                            <div class="progress-bar__item-inner js-format-progress-item">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="harmony" class="section section--no-overflow-clip ui-dark ui-background" data-scroll-section="" data-themed-class="ui-light-alt" data-plugin="reveal">
              <div class="l-harmony l-harmony--under-next">
                <div class="l-harmony__layer">
                  <picture class="img-full l-harmony__layer-background" data-reveal="image-in-fullscreen" data-reveal-visible="true" data-plugin="lazy" draggable="false">
                    <source srcset="https://aircenter.space/media/cache/homepage_harmony_bg_xxxl/assets/images/media/landing/4.harmony/background%40xxxl.webp" media="(min-width: 1920px) and (min-height: 700px)" />
                    <source srcset="https://aircenter.space/media/cache/homepage_harmony_bg_xxl/assets/images/media/landing/4.harmony/background%40xxxl.webp" media="(min-width: 1440px) and (min-height: 700px)" />
                    <source srcset="https://aircenter.space/media/cache/homepage_harmony_bg_md/assets/images/media/landing/4.harmony/background%40xxxl.webp" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                    <img draggable="false" loading="lazy" src="https://aircenter.space/media/cache/homepage_harmony_bg_xs/assets/images/media/landing/4.harmony/background%40xs.webp" alt="" style="--aspect-ratio: auto 780 / 855; --ratio: 0.91228070175439;" data-plugin="parallax" data-parallax-pattern="landingHarmonyBackground" />
                  </picture>
                </div>
                <div class="l-harmony__layer l-harmony__layer--bottom l-harmony__layer--spacing">
                  <div data-plugin="parallax" data-parallax-measure-selector=".section" data-parallax-clamp="true" data-parallax-100-0="{&#34;transform&#34;: &#34;translateY(20svh)&#34;}" data-parallax-0-100="{&#34;transform&#34;: &#34;translateY(-20svh)&#34;}">
                    <div class="container-h pb-12 pb-layout:md">
                      <div class="row row--pad">
                        <div class="col col--xs-12 col--md-4 offset--md-8">
                          <div class="l-harmony-card px-layout py-layout">
                            <div class="row row--pad">
                              <div class="col col--xs-10 col--md-9">
                                <h2 class="leading-trim">
                                  An intelligent harmony of curved glass and radiant metal
                                </h2>
                              </div>
                              <div class="col col--xs-12 col--md-12">
                                <picture class="img-full l-harmony-card__image" data-plugin="lazy" draggable="false">
                                  <source srcset="https://aircenter.space/assets/images/media/landing/4.harmony/card-image@xxxl.webp?v=1781014343" media="(min-width: 1920px) and (min-height: 700px)" />
                                  <source srcset="https://aircenter.space/assets/images/media/landing/4.harmony/card-image@xxl.webp?v=1781014343" media="(min-width: 1440px) and (min-height: 700px)" />
                                  <source srcset="https://aircenter.space/assets/images/media/landing/4.harmony/card-image@md.webp?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                                  <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/landing/4.harmony/card-image@xs.webp?v=1781014343" alt="" style="--aspect-ratio: auto 700 / 700; --ratio: 1;" />
                                </picture>
                              </div>
                              <div class="col col--xs-6 col--md-6">
                                <a class="btn btn--secondary btn--vertical-between btn--rotation btn--full " href="/about">                                <span class="btn__content">                                <span class="btn__text ">                                About the project
</span>
                                <span class="btn__icon ">                                <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                                  <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                                  </use>
                                </svg>
</span>
</span>
</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="life" class="section section--no-overflow-clip ui-dark ui-background" data-scroll-section="" data-themed-class="ui-dark" data-plugin="reveal">
              <div class="container-h pt-layout">
                <h2 class="h1 group group:md group--between" data-reveal="text">
                  <span class="leading-trim">                  At the center
</span>
                  <span class="leading-trim text-default text-color-text is-hidden--sm-down">                  At the heart
                  <br />
                  of business
</span>
                  <span class="leading-trim">                  of life
</span>
                </h2>
                <p class="leading-trim text-default text-color-text text-right mt-4 is-hidden--md-up">
                  At the heart
                  <br />
                  of business
                </p>
                <div class="row row--pad mt-8 l-life-top">
                  <div class="col col--xs-12 col--md-6 offset--md-6">
                    <p class="text-lead text-color-heading leading-trim l-life-text" data-reveal="text">
                      <span class="text-offset text-offset--2 is-hidden--sm-down"></span>
                      The premium AIR business center is designed to become a symbol the City — a large-scale area spanning one of the city’s primary business districts.
                    </p>
                  </div>
                  <div class="col col--xs-12 col--md-8">
                    <picture class="img-full img-rounded ui-background parallax-image-move" data-reveal="image-in" data-plugin="lazy" draggable="false">
                      <source srcset="https://aircenter.space/media/cache/homepage_life_img_xxxl/assets/images/media/landing/5.life/image%40xxxl.webp" media="(min-width: 1920px) and (min-height: 700px)" />
                      <source srcset="https://aircenter.space/media/cache/homepage_life_img_xxl/assets/images/media/landing/5.life/image%40xxxl.webp" media="(min-width: 1440px) and (min-height: 700px)" />
                      <source srcset="https://aircenter.space/media/cache/homepage_life_img_md/assets/images/media/landing/5.life/image%40xxxl.webp" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                      <img draggable="false" loading="lazy" src="https://aircenter.space/media/cache/homepage_life_img_xs/assets/images/media/landing/5.life/image%40xs.webp" alt="" style="--aspect-ratio: var(--xxxl, auto 1673 / 1282) var(--n-xxxl, var(--xxl, auto 1316 / 1008) var(--n-xxl, var(--md, auto 940 / 720) var(--n-md, auto 700 / 700))); --ratio: var(--xxxl, 1.304992199688) var(--n-xxxl, var(--xxl, 1.3055555555556) var(--n-xxl, var(--md, 1.3055555555556) var(--n-md, 1)));" data-plugin="parallax" data-parallax-pattern="imageMove" />
                    </picture>
                  </div>
                  <div class="col col--xs-12 col--md-4 l-life-layout-right">
                    <p class="leading-trim py-4 py-0:md" data-reveal="text">
                      Through gentrification — the transformation of underutilized urban areas into a vibrant district of the future that concentrates the city’s business energy, with AIR becoming the main beneficiary of these changes.
                    </p>
                    <div class="row row--pad l-life-layout-right__button">
                      <div class="col col--xs-6 col--md-6 offset--md-6">
                        <a class="btn btn--secondary btn--vertical-between btn--rotation btn--full " href="/location">                        <span class="btn__content">                        <span class="btn__text ">                        Location
</span>
                        <span class="btn__icon ">                        <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                          <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                          </use>
                        </svg>
</span>
</span>
</a>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
                <div class="l-life-cards">
                  <div class="l-life-cards-background" data-plugin="parallax" data-parallax-measure-selector=".l-life-cards, .js-life-background-wrapper" data-parallax-100-0="{ &#34;transform&#34;: &#34;translateY(-50%) translateY(-15svh)&#34; }" data-parallax-0-100="{ &#34;transform&#34;: &#34;translateY(-50%) translateY(15svh)&#34; }">
                    <div class="background background--cover is-hidden--md-up" data-plugin="iframeSize" style=" --iframe-ratio: 0.609375; --aspect-ratio: 780 / 1280">
                      <picture class="background__placeholder img-cover" data-plugin="lazy" draggable="false">
                        <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/landing/5.life/placeholder@xs.webp?v=1781014343" alt="" style="--aspect-ratio: auto 780 / 1280; --ratio: 0.609375;" />
                      </picture>
                      <iframe width="780" height="1280" src="https://player.vimeo.com/video/1145257803?loop=1&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;background=1" allow="autoplay; encrypted-media" allowfullscreen="" title="Vimeo video" loading="lazy" data-plugin="lazy" onload="this.complete = true">
                      </iframe>
                    </div>
                    <div class="background background--cover is-hidden--sm-down" data-plugin="iframeSize" style=" --iframe-ratio: 1.8888888888889; --aspect-ratio: 1428 / 756">
                      <picture class="background__placeholder img-cover" data-plugin="lazy" draggable="false">
                        <source srcset="https://aircenter.space/assets/images/media/landing/5.life/placeholder@xxxl.webp?v=1781014343" media="(min-width: 1920px) and (min-height: 700px)" />
                        <source srcset="https://aircenter.space/assets/images/media/landing/5.life/placeholder@xxl.webp?v=1781014343" media="(min-width: 1440px) and (min-height: 700px)" />
                        <source srcset="https://aircenter.space/assets/images/media/landing/5.life/placeholder@md.webp?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                        <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/landing/5.life/placeholder@xs.webp?v=1781014343" alt="" style="--aspect-ratio: var(--xxxl, auto 2599 / 1496) var(--n-xxxl, var(--xxl, auto 2044 / 1176) var(--n-xxl, var(--md, auto 1460 / 840) var(--n-md, auto 780 / 1280))); --ratio: var(--xxxl, 1.7372994652406) var(--n-xxxl, var(--xxl, 1.7380952380952) var(--n-xxl, var(--md, 1.7380952380952) var(--n-md, 0.609375)));" />
                      </picture>
                      <iframe width="1428" height="756" src="https://player.vimeo.com/video/1145253896?loop=1&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;background=1" allow="autoplay; encrypted-media" allowfullscreen="" title="Vimeo video" loading="lazy" data-plugin="lazy" onload="this.complete = true">
                      </iframe>
                    </div>
                  </div>
                  <ul class="mobile-scrollable l-life-cards__list">
                    <li class="mobile-scrollable__item">
                      <div class="l-location-card">
                        <span class="h1 text-color-heading leading-trim l-location-card__top">                        1
</span>
                        <span class="text-small text-color-text leading-trim">                        min
                        <br />
                        walk
</span>
                        <span class="h2 text-color-heading text-right leading-trim l-location-card__bottom">                        Mall
</span>
                      </div>
                    </li>
                    <li class="mobile-scrollable__item">
                      <div class="l-location-card">
                        <span class="h1 text-color-heading leading-trim l-location-card__top">                        3
</span>
                        <span class="text-small text-color-text leading-trim">                        min
                        <br />
                        walk
</span>
                        <span class="h2 text-color-heading text-right leading-trim l-location-card__bottom">                        Metro Station
</span>
                      </div>
                    </li>
                    <li class="mobile-scrollable__item">
                      <div class="l-location-card">
                        <span class="h1 text-color-heading leading-trim l-location-card__top">                        7
</span>
                        <span class="text-small text-color-text leading-trim">                        min
                        <br />
                        drive
</span>
                        <span class="h2 text-color-heading text-right leading-trim l-location-card__bottom">                        Downtown
</span>
                      </div>
                    </li>
                    <li class="mobile-scrollable__item">
                      <div class="l-location-card">
                        <span class="h1 text-color-heading leading-trim l-location-card__top">                        11
</span>
                        <span class="text-small text-color-text leading-trim">                        min
                        <br />
                        drive
</span>
                        <span class="h2 text-color-heading text-right leading-trim l-location-card__bottom">                        Highway
</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="row row--pad l-life-text-bottom">
                  <div class="col col--xs-12 col--md-4 offset--md-6">
                    <p class="leading-trim" data-reveal="text">
                      The prime location ensures a healthy work–life balance for employees and top management working at AIR. The development of the downtown allows them to enjoy the best the capital has to offer without leaving their preferred district.
                    </p>
                  </div>
                </div>
              </div>
              <div class="sticky sticky--under-next l-life-map-sticky">
                <div class="sticky__layer sticky__layer--sticky" data-scroll="" data-scroll-sticky="" data-plugin="stickyBottom">
                  <div data-plugin="parallax" data-parallax-pattern="sectionToSticky">
                    <div class="l-life-map">
                      <div class="plan plan--mobile-scroll" data-plugin="plan" data-plan-plans="[{&#34;svg&#34;:{&#34;xs&#34;:&#34;\/assets\/images\/media\/landing\/5.life\/map-mobile.svg?v=1781014343&#34;,&#34;md&#34;:&#34;\/assets\/images\/media\/landing\/5.life\/map.svg?v=1781014343&#34;},&#34;scrollPosition&#34;:0.473,&#34;items&#34;:[{&#34;markers&#34;:[{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-1&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-2&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-3&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-4&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-5&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-6&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-7&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-8&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-9&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-10&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-11&#34;,&#34;template&#34;:&#34;metro&#34;,&#34;direction&#34;:&#34;top&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-12&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;&#34;,&#34;anchor&#34;:&#34;metro-13&#34;,&#34;template&#34;:&#34;metro&#34;},{&#34;title&#34;:&#34;Birch\n grove&#34;,&#34;anchor&#34;:&#34;poi-1&#34;,&#34;template&#34;:&#34;poi&#34;},{&#34;title&#34;:&#34;Skyline\n Fields&#34;,&#34;anchor&#34;:&#34;poi-2&#34;,&#34;template&#34;:&#34;poi&#34;},{&#34;title&#34;:&#34;Mall&#34;,&#34;anchor&#34;:&#34;poi-3&#34;,&#34;template&#34;:&#34;poi&#34;,&#34;direction&#34;:&#34;right&#34;,&#34;class&#34;:&#34;plan-marker--poi--bold&#34;},{&#34;title&#34;:&#34;NWC&#34;,&#34;anchor&#34;:&#34;street-1&#34;,&#34;template&#34;:&#34;street&#34;,&#34;placement&#34;:&#34;top&#34;,&#34;angle&#34;:&#34;73.81deg&#34;},{&#34;title&#34;:&#34;NWC&#34;,&#34;anchor&#34;:&#34;street-2&#34;,&#34;template&#34;:&#34;street&#34;,&#34;placement&#34;:&#34;top&#34;,&#34;angle&#34;:&#34;45.44deg&#34;},{&#34;title&#34;:&#34;country road&#34;,&#34;anchor&#34;:&#34;street-3&#34;,&#34;template&#34;:&#34;street&#34;,&#34;placement&#34;:&#34;bottom&#34;,&#34;angle&#34;:&#34;-14.79deg&#34;},{&#34;title&#34;:&#34;Northern Ave&#34;,&#34;anchor&#34;:&#34;street-5&#34;,&#34;template&#34;:&#34;street&#34;,&#34;placement&#34;:&#34;top&#34;,&#34;angle&#34;:&#34;-38.37deg&#34;},{&#34;title&#34;:&#34;TRR&#34;,&#34;anchor&#34;:&#34;street-6&#34;,&#34;template&#34;:&#34;street&#34;,&#34;placement&#34;:&#34;bottom&#34;,&#34;angle&#34;:&#34;56.7deg&#34;},{&#34;title&#34;:&#34;TRR&#34;,&#34;anchor&#34;:&#34;street-7&#34;,&#34;template&#34;:&#34;street&#34;,&#34;placement&#34;:&#34;bottom&#34;,&#34;angle&#34;:&#34;50.86deg&#34;},{&#34;title&#34;:&#34;TRR&#34;,&#34;anchor&#34;:&#34;street-8&#34;,&#34;template&#34;:&#34;street&#34;,&#34;placement&#34;:&#34;top&#34;,&#34;angle&#34;:&#34;4.4deg&#34;},{&#34;title&#34;:&#34;AIR&#34;,&#34;anchor&#34;:&#34;air&#34;,&#34;template&#34;:&#34;main&#34;}]}]}]">
                        <script type="text/template" data-template-name="street" data-template-variable="item">
                          &lt;div class=&#34;plan-marker plan-marker--street plan-marker--street--&lt;%- item.align %&gt; &lt;%- item.stateClass %&gt;&#34; style=&#34;--plan-marker-angle: &lt;%- item.angle %&gt;;&#34;&gt;
        &lt;div class=&#34;plan-marker__content&#34;&gt;
            &lt;div class=&#34;plan-marker__text leading-trim&#34;&gt;&lt;%= nl2br(item.title) %&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
                        </script>
                        <script type="text/template" data-template-name="metro" data-template-variable="item">
                          &lt;div class=&#34;plan-marker plan-marker--metro plan-marker--metro--&lt;%- item.direction %&gt; &lt;%- item.stateClass %&gt;&#34;&gt;
        &lt;div class=&#34;plan-marker__content&#34;&gt;
            &lt;svg class=&#34;icon icon-map-metro plan-marker__icon&#34; width=&#34;22&#34; height=&#34;22&#34; aria-hidden=&#34;true&#34;            viewBox=&#34;0 0 22 22&#34;
            style=&#34;--icon-width: 22; --icon-height: 22;&#34;
        &gt;&lt;use href=&#34;&amp;#x2F;assets&amp;#x2F;images&amp;#x2F;icons.svg&amp;#x3F;v&amp;#x3D;1781014343#map-metro&#34; xlink:href=&#34;&amp;#x2F;assets&amp;#x2F;images&amp;#x2F;icons.svg&amp;#x3F;v&amp;#x3D;1781014343#map-metro&#34;&gt;&lt;/use&gt;&lt;/svg&gt;
            &lt;div class=&#34;plan-marker__text leading-trim&#34;&gt;&lt;%= nl2br(item.title) %&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
                        </script>
                        <script type="text/template" data-template-name="poi" data-template-variable="item">
                          &lt;div class=&#34;plan-marker plan-marker--poi plan-marker--poi--&lt;%- item.direction %&gt; &lt;%- item.class || &#39;&#39; %&gt; &lt;%- item.stateClass %&gt;&#34;&gt;
        &lt;div class=&#34;plan-marker__content&#34;&gt;
            &lt;svg class=&#34;icon icon-map-poi plan-marker__icon&#34; width=&#34;8&#34; height=&#34;8&#34; aria-hidden=&#34;true&#34;            viewBox=&#34;0 0 8 8&#34;
            style=&#34;--icon-width: 8; --icon-height: 8;&#34;
        &gt;&lt;use href=&#34;&amp;#x2F;assets&amp;#x2F;images&amp;#x2F;icons.svg&amp;#x3F;v&amp;#x3D;1781014343#map-poi&#34; xlink:href=&#34;&amp;#x2F;assets&amp;#x2F;images&amp;#x2F;icons.svg&amp;#x3F;v&amp;#x3D;1781014343#map-poi&#34;&gt;&lt;/use&gt;&lt;/svg&gt;
            &lt;div class=&#34;plan-marker__text leading-trim&#34;&gt;&lt;%= nl2br(item.title) %&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
                        </script>
                        <script type="text/template" data-template-name="main" data-template-variable="item">
                          &lt;div class=&#34;plan-marker plan-marker--main  &lt;%- item.stateClass %&gt;&#34;&gt;
        &lt;div class=&#34;plan-marker__content&#34;&gt;
                            &lt;svg class=&#34;plan-marker__icon&#34; viewBox=&#34;0 0 102 73&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34; width=&#34;102&#34; height=&#34;73&#34; fill=&#34;none&#34;&gt;&lt;path fill=&#34;#000&#34; stroke=&#34;#fff&#34; d=&#34;M93 1H9c-2.8 0-4.2 0-5.3.5a5 5 0 0 0-2.2 2.2C1 4.8 1 6.2 1 9v44c0 2.8 0 4.2.5 5.3a5 5 0 0 0 2.2 2.2c1.1.5 2.5.5 5.3.5h82l10 10V9c0-2.8 0-4.2-.5-5.3a5 5 0 0 0-2.2-2.2C97.2 1 95.8 1 93 1Z&#34;/&gt;&lt;path fill=&#34;#fff&#34; d=&#34;M37.4 11h-2.8v20h2.8zM45.2 13.4h6.7c2.2 0 3.9 1.7 3.9 3.8S54.1 21 51.9 21h-6.7zM59.3 31l-6.1-7.7c3-.4 5.4-3 5.4-6.1 0-3.4-2.8-6.2-6.2-6.2h-10v20h2.8v-7.7h4.5l6.1 7.7zM17.8 23.4l3.9-10h.4l3.9 10zm14 7.6L24 11h-4.3L12 31h2.8l2-5.3H27l2 5.3z&#34;/&gt;&lt;/svg&gt;
                    &lt;/div&gt;
    &lt;/div&gt;
                        </script>
                      </div>
                      <div class="plan-mobile-scroll-indicator is-hidden--hover is-hidden--md-up js-plan-mobile-scroll-indicator">
                        <svg class="icon icon-scroll" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
                          <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#scroll" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#scroll">
                          </use>
                        </svg>
                      </div>
                      <div class="l-life-map__button pb-3 pb-layout:md">
                        <div class="row row--pad">
                          <div class="col col--xs-6 col--md-2 offset--md-10">
                            <a class="btn btn--secondary btn--vertical-between btn--rotation btn--full " href="/location#map">                            <span class="btn__content">                            <span class="btn__text ">                            Interactive map
</span>
                            <span class="btn__icon ">                            <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                              <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                              </use>
                            </svg>
</span>
</span>
</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div id="people" class="section section--no-overflow-clip ui-dark ui-background" data-scroll-section="" data-themed-class="ui-light-alt" data-plugin="reveal">
                <div class="l-people-intro">
                  <div class="l-people-intro__layer l-people-intro__layer--background">
                    <picture class="img-full l-people-intro__layer-background" data-reveal="image-in-fullscreen" data-reveal-visible="true" data-plugin="lazy" draggable="false">
                      <source srcset="https://aircenter.space/media/cache/homepage_people_bg_xxxl/assets/images/media/landing/6.people/background%40xxxl.webp" media="(min-width: 1920px) and (min-height: 700px)" />
                      <source srcset="https://aircenter.space/media/cache/homepage_people_bg_xxl/assets/images/media/landing/6.people/background%40xxxl.webp" media="(min-width: 1440px) and (min-height: 700px)" />
                      <source srcset="https://aircenter.space/media/cache/homepage_people_bg_md/assets/images/media/landing/6.people/background%40xxxl.webp" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                      <img draggable="false" loading="lazy" src="https://aircenter.space/media/cache/homepage_people_bg_xs/assets/images/media/landing/6.people/background%40xs.webp" alt="" style="--aspect-ratio: var(--xxxl, auto 2599 / 1709) var(--n-xxxl, var(--xxl, auto 2044 / 1344) var(--n-xxl, var(--md, auto 1460 / 960) var(--n-md, auto 780 / 780))); --ratio: var(--xxxl, 1.5207723815097) var(--n-xxxl, var(--xxl, 1.5208333333333) var(--n-xxl, var(--md, 1.5208333333333) var(--n-md, 1)));" data-plugin="parallax" data-parallax-pattern="landingHarmonyBackground" />
                    </picture>
                  </div>
                  <div class="l-people-intro__layer l-people-intro__layer--bottom">
                    <div class="container-h pb-layout">
                      <p class="text-color-heading leading-trim mb-2 is-hidden--md-up">
                        Business center
                      </p>
                      <h2 class="group group:md group--between group--bottom" data-reveal="text">
                        <span class="text-default leading-trim text-color-heading is-hidden--sm-down">                        Business center
</span>
                        <span class="h1 leading-trim text-color-heading text-nowrap">                        Designed with
</span>
                        <span class="h1 leading-trim text-color-heading text-nowrap">                        people in mind
</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="section section--no-overflow ui-light ui-background" data-scroll-section="" data-themed-class="ui-light" data-plugin="reveal">
                <div class="container-h py-8 l-people-text">
                  <div class="row row--pad">
                    <div class="col col--xs-12 col--md-6 offset--md-6">
                      <p class="h2 leading-trim" data-reveal="text">
                        <span class="text-offset text-offset--2 is-hidden--sm-down"></span>
                        AIR celebrates freedom and self-sufficiency. The architects chose not to connect the towers with a shared podium level, creating cozy open courtyards instead.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="l-people-carousel-deco">
                  <picture class="l-people-carousel-deco__deco img-full" data-parallax-100-0="{&#34;transform&#34;:&#34;translateY(-50%) translateY(-15svh)&#34;}" data-parallax-0-100="{&#34;transform&#34;:&#34;translateY(-50%) translateY(15svh)&#34;}" data-plugin="lazy parallax" draggable="false">
                    <source srcset="https://aircenter.space/assets/images/media/landing/6.people/deco@xxxl.webp?v=1781014343" media="(min-width: 1920px) and (min-height: 700px)" />
                    <source srcset="https://aircenter.space/assets/images/media/landing/6.people/deco@xxl.webp?v=1781014343" media="(min-width: 1440px) and (min-height: 700px)" />
                    <source srcset="https://aircenter.space/assets/images/media/landing/6.people/deco@md.webp?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                    <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/landing/6.people/deco@xs.webp?v=1781014343" alt="" style="--aspect-ratio: var(--xxxl, auto 1531 / 1674) var(--n-xxxl, var(--xxl, auto 1204 / 1316) var(--n-xxl, var(--md, auto 860 / 940) var(--n-md, auto 780 / 950))); --ratio: var(--xxxl, 0.91457586618877) var(--n-xxxl, var(--xxl, 0.91489361702128) var(--n-xxl, var(--md, 0.91489361702128) var(--n-md, 0.82105263157895)));" />
                  </picture>
                  <div class="l-people-carousel is-hidden--sm-down" data-plugin="carouselWebGl cursor" data-carousel-web-gl-images="[{&#34;xs&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xs\/assets\/images\/media\/landing\/6.people\/image-1%40xs.webp&#34;,&#34;width&#34;:520,&#34;height&#34;:520},&#34;md&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_md\/assets\/images\/media\/landing\/6.people\/image-1%40xxxl.webp&#34;,&#34;width&#34;:840,&#34;height&#34;:480},&#34;xxl&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xxl\/assets\/images\/media\/landing\/6.people\/image-1%40xxxl.webp&#34;,&#34;width&#34;:1176,&#34;height&#34;:672},&#34;xxxl&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xxxl\/assets\/images\/media\/landing\/6.people\/image-1%40xxxl.webp&#34;,&#34;width&#34;:1495,&#34;height&#34;:855}},{&#34;xs&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xs\/assets\/images\/media\/landing\/6.people\/image-2%40xs.webp&#34;,&#34;width&#34;:520,&#34;height&#34;:520},&#34;md&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_md\/assets\/images\/media\/landing\/6.people\/image-2%40xxxl.webp&#34;,&#34;width&#34;:840,&#34;height&#34;:480},&#34;xxl&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xxl\/assets\/images\/media\/landing\/6.people\/image-2%40xxxl.webp&#34;,&#34;width&#34;:1176,&#34;height&#34;:672},&#34;xxxl&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xxxl\/assets\/images\/media\/landing\/6.people\/image-2%40xxxl.webp&#34;,&#34;width&#34;:1495,&#34;height&#34;:855}},{&#34;xs&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xs\/assets\/images\/media\/landing\/6.people\/image-3%40xs.webp&#34;,&#34;width&#34;:520,&#34;height&#34;:520},&#34;md&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_md\/assets\/images\/media\/landing\/6.people\/image-3%40xxxl.webp&#34;,&#34;width&#34;:840,&#34;height&#34;:480},&#34;xxl&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xxl\/assets\/images\/media\/landing\/6.people\/image-3%40xxxl.webp&#34;,&#34;width&#34;:1176,&#34;height&#34;:672},&#34;xxxl&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xxxl\/assets\/images\/media\/landing\/6.people\/image-3%40xxxl.webp&#34;,&#34;width&#34;:1495,&#34;height&#34;:855}},{&#34;xs&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xs\/assets\/images\/media\/landing\/6.people\/image-4%40xs.webp&#34;,&#34;width&#34;:520,&#34;height&#34;:520},&#34;md&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_md\/assets\/images\/media\/landing\/6.people\/image-4%40xxxl.webp&#34;,&#34;width&#34;:840,&#34;height&#34;:480},&#34;xxl&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xxl\/assets\/images\/media\/landing\/6.people\/image-4%40xxxl.webp&#34;,&#34;width&#34;:1176,&#34;height&#34;:672},&#34;xxxl&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xxxl\/assets\/images\/media\/landing\/6.people\/image-4%40xxxl.webp&#34;,&#34;width&#34;:1495,&#34;height&#34;:855}},{&#34;xs&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xs\/assets\/images\/media\/landing\/6.people\/image-5%40xs.webp&#34;,&#34;width&#34;:520,&#34;height&#34;:520},&#34;md&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_md\/assets\/images\/media\/landing\/6.people\/image-5%40xxxl.webp&#34;,&#34;width&#34;:840,&#34;height&#34;:480},&#34;xxl&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xxl\/assets\/images\/media\/landing\/6.people\/image-5%40xxxl.webp&#34;,&#34;width&#34;:1176,&#34;height&#34;:672},&#34;xxxl&#34;:{&#34;src&#34;:&#34;https:\/\/aircenter.space\/media\/cache\/homepage_people_slider_img_xxxl\/assets\/images\/media\/landing\/6.people\/image-5%40xxxl.webp&#34;,&#34;width&#34;:1495,&#34;height&#34;:855}}]">
                    <div class="spinner js-carousel-webgl-spinner">
                    </div>
                    <div class="cursor cursor--hidden cursor--arrow js-cursor-button ui-light-alt is-hidden--no-hover">
                      <span class="btn btn--secondary btn--square cursor__button cursor__button--left ">                      <span class="btn__content">                      <span class="btn__icon ">                      <svg class="icon icon-arrow-left" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
                        <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#arrow-left" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#arrow-left">
                        </use>
                      </svg>
</span>
</span>
</span>
                      <span class="btn btn--secondary btn--square cursor__button cursor__button--right ">                      <span class="btn__content">                      <span class="btn__icon ">                      <svg class="icon icon-arrow-right" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
                        <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#arrow-right" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#arrow-right">
                        </use>
                      </svg>
</span>
</span>
</span>
                    </div>
                    <div class="l-people-carousel__touch-nav container-h ui-light-alt is-hidden--hover">
                      <span class="btn btn--secondary btn--square ">                      <span class="btn__content">                      <span class="btn__icon ">                      <svg class="icon icon-arrow-left" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
                        <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#arrow-left" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#arrow-left">
                        </use>
                      </svg>
</span>
</span>
</span>
                      <span class="btn btn--secondary btn--square ">                      <span class="btn__content">                      <span class="btn__icon ">                      <svg class="icon icon-arrow-right" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
                        <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#arrow-right" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#arrow-right">
                        </use>
                      </svg>
</span>
</span>
</span>
                    </div>
                  </div>
                  <div class="container-h is-hidden--md-up">
                    <ul class="mobile-scrollable">
                      <li class="mobile-scrollable__item">
                        <img class="img-full img-rounded" alt="" draggable="false" data-plugin="lazy" loading="lazy" width="520" height="520" style="--aspect-ratio: auto 520 / 520; --ratio: 1;" src="https://aircenter.space/media/cache/homepage_people_slider_img_xs/assets/images/media/landing/6.people/image-1%40xs.webp" />
                      </li>
                      <li class="mobile-scrollable__item">
                        <img class="img-full img-rounded" alt="" draggable="false" data-plugin="lazy" loading="lazy" width="520" height="520" style="--aspect-ratio: auto 520 / 520; --ratio: 1;" src="https://aircenter.space/media/cache/homepage_people_slider_img_xs/assets/images/media/landing/6.people/image-2%40xs.webp" />
                      </li>
                      <li class="mobile-scrollable__item">
                        <img class="img-full img-rounded" alt="" draggable="false" data-plugin="lazy" loading="lazy" width="520" height="520" style="--aspect-ratio: auto 520 / 520; --ratio: 1;" src="https://aircenter.space/media/cache/homepage_people_slider_img_xs/assets/images/media/landing/6.people/image-3%40xs.webp" />
                      </li>
                      <li class="mobile-scrollable__item">
                        <img class="img-full img-rounded" alt="" draggable="false" data-plugin="lazy" loading="lazy" width="520" height="520" style="--aspect-ratio: auto 520 / 520; --ratio: 1;" src="https://aircenter.space/media/cache/homepage_people_slider_img_xs/assets/images/media/landing/6.people/image-4%40xs.webp" />
                      </li>
                      <li class="mobile-scrollable__item">
                        <img class="img-full img-rounded" alt="" draggable="false" data-plugin="lazy" loading="lazy" width="520" height="520" style="--aspect-ratio: auto 520 / 520; --ratio: 1;" src="https://aircenter.space/media/cache/homepage_people_slider_img_xs/assets/images/media/landing/6.people/image-5%40xs.webp" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="container-h py-8">
                  <div class="row row--pad">
                    <div class="col col--xs-12 col--md-4 offset--md-4">
                      <p class="leading-trim text-center:md is-hidden--br-xs" data-reveal="text">
                        Employees can hold informal meetings on cafe terraces
                        <br />
                        or relax outdoors during lunch breaks, while employers
                        <br />
                        gain an additional tool to improve team productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div id="status" class="section section--no-overflow-clip ui-dark ui-background" data-scroll-section="" data-themed-class="ui-light-alt" data-plugin="reveal">
                <picture class="img-full" data-reveal="image-in-fullscreen" data-reveal-visible="true" data-plugin="lazy" draggable="false">
                  <source srcset="https://aircenter.space/media/cache/homepage_status_bg_xxxl/assets/images/media/landing/7.status/background%40xxxl.webp" media="(min-width: 1920px) and (min-height: 700px)" />
                  <source srcset="https://aircenter.space/media/cache/homepage_status_bg_xxl/assets/images/media/landing/7.status/background%40xxxl.webp" media="(min-width: 1440px) and (min-height: 700px)" />
                  <source srcset="https://aircenter.space/media/cache/homepage_status_bg_md/assets/images/media/landing/7.status/background%40xxxl.webp" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                  <img draggable="false" loading="lazy" src="https://aircenter.space/media/cache/homepage_status_bg_xs/assets/images/media/landing/7.status/background%40xs.webp" alt="" style="--aspect-ratio: var(--xxxl, auto 2599 / 1709) var(--n-xxxl, var(--xxl, auto 2044 / 1344) var(--n-xxl, var(--md, auto 1460 / 960) var(--n-md, auto 780 / 780))); --ratio: var(--xxxl, 1.5207723815097) var(--n-xxxl, var(--xxl, 1.5208333333333) var(--n-xxl, var(--md, 1.5208333333333) var(--n-md, 1)));" data-plugin="parallax" data-parallax-pattern="landingHarmonyBackground" />
                </picture>
              </div>
              <div class="section section--no-overflow-clip ui-light ui-background" data-scroll-section="" data-themed-class="ui-light" data-plugin="reveal">
                <div class="container-h pt-layout">
                  <h2 class="group group--between group--bottom" data-reveal="text">
                    <span class="h1 leading-trim text-color-heading is-hidden--sm-down">                    A tangible sense
</span>
                    <span class="h1 leading-trim text-color-heading is-hidden--sm-down">                    of status
</span>
                    <span class="h1 leading-trim text-color-heading is-hidden--md-up">                    A tangible sense of status
</span>
                  </h2>
                  <div class="pt-8 pt-6:md pb-8">
                    <p class="leading-trim text-center l-status-text is-hidden--br-xs" data-reveal="text">
                      The facades of AIR resemble frozen waves.
                      <br />
                      HAAST Bureau continuing this elemental
                      <br />
                      metaphor in the lobby design.
                    </p>
                  </div>
                  <div class="sticky sticky--full-height image-slider-sticky  " style="--items-count: 2;">
                    <div class="sticky__layer sticky__layer--sticky image-slider-sticky__layer" data-scroll="" data-scroll-sticky="">
                      <div class="row row--pad image-slider-sticky__layer-row" data-plugin="parallax" data-parallax-pattern="sectionToSticky sectionFromSticky">
                        <div class="col col--xs-12 col--md-8 image-slider-sticky__layer-col image-slider-sticky__layer-col-image">
                          <div class="image-slider-images" data-plugin="contentAnimation" data-content-animation-animations="{
                            &#34;changeShow&#34;: {&#34;name&#34;: &#34;imageClipInVertical&#34;},
                            &#34;changeHide&#34;: {&#34;name&#34;: &#34;imageClipOutVertical&#34;}
                        }" data-content-animation-plugins="controller" data-content-animation-controller-selector=":root .js-image-slider-content-controller">
                            <div class="content-animation content-animation--center">
                              <div data-content-animation-item="1" class="" aria-hidden="false">
                                <picture class="img-full img-rounded" data-reveal="image-in" data-plugin="lazy" draggable="false">
                                  <source srcset="https://aircenter.space/media/cache/homepage_status_slider_img_xxxl/assets/images/media/landing/7.status/image-1%40xxxl.webp" media="(min-width: 1920px) and (min-height: 700px)" />
                                  <source srcset="https://aircenter.space/media/cache/homepage_status_slider_img_xxl/assets/images/media/landing/7.status/image-1%40xxxl.webp" media="(min-width: 1440px) and (min-height: 700px)" />
                                  <source srcset="https://aircenter.space/media/cache/homepage_status_slider_img_md/assets/images/media/landing/7.status/image-1%40xxxl.webp" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                                  <img draggable="false" loading="lazy" src="https://aircenter.space/media/cache/homepage_status_slider_img_xs/assets/images/media/landing/7.status/image-1%40xs.webp" alt="" style="--aspect-ratio: var(--xxxl, auto 1673 / 1193) var(--n-xxxl, var(--xxl, auto 1316 / 938) var(--n-xxl, var(--md, auto 940 / 670) var(--n-md, auto 700 / 480))); --ratio: var(--xxxl, 1.4023470243085) var(--n-xxxl, var(--xxl, 1.4029850746269) var(--n-xxl, var(--md, 1.4029850746269) var(--n-md, 1.4583333333333)));" data-plugin="parallax" data-parallax-pattern="imageSliderImage" data-parallax-first="true" data-parallax-last="false" data-parallax-index="0" />
                                </picture>
                              </div>
                              <div data-content-animation-item="2" class="is-hidden" aria-hidden="true">
                                <picture class="img-full img-rounded" data-plugin="lazy" draggable="false">
                                  <source srcset="https://aircenter.space/media/cache/homepage_status_slider_img_xxxl/assets/images/media/landing/7.status/image-2%40xxxl.webp" media="(min-width: 1920px) and (min-height: 700px)" />
                                  <source srcset="https://aircenter.space/media/cache/homepage_status_slider_img_xxl/assets/images/media/landing/7.status/image-2%40xxxl.webp" media="(min-width: 1440px) and (min-height: 700px)" />
                                  <source srcset="https://aircenter.space/media/cache/homepage_status_slider_img_md/assets/images/media/landing/7.status/image-2%40xxxl.webp" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                                  <img draggable="false" loading="lazy" src="https://aircenter.space/media/cache/homepage_status_slider_img_xs/assets/images/media/landing/7.status/image-2%40xs.webp" alt="" style="--aspect-ratio: var(--xxxl, auto 1673 / 1193) var(--n-xxxl, var(--xxl, auto 1316 / 938) var(--n-xxl, var(--md, auto 940 / 670) var(--n-md, auto 700 / 480))); --ratio: var(--xxxl, 1.4023470243085) var(--n-xxxl, var(--xxl, 1.4029850746269) var(--n-xxl, var(--md, 1.4029850746269) var(--n-md, 1.4583333333333)));" data-plugin="parallax" data-parallax-pattern="imageSliderImage" data-parallax-first="false" data-parallax-last="true" data-parallax-index="1" />
                                </picture>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col col--xs-12 col--md-4 image-slider-sticky__layer-col">
                          <div class="card-slider   card-slider--with-buttons  ui-background-alt-dark ui-background-blur-large px-layout py-layout" data-reveal-group="" data-reveal-threshold="0">
                            <div class="progress-bar ">
                              <div class="progress-bar__item">
                                <div class="progress-bar__item-inner js-image-slider-progress-item">
                                </div>
                              </div>
                              <div class="progress-bar__item">
                                <div class="progress-bar__item-inner js-image-slider-progress-item">
                                </div>
                              </div>
                            </div>
                            <p class="card-slider__counter group group--between is-hidden--sm-down">
                              <span class="h1 leading-trim js-image-slider-counter">                              1
</span>
                              <span class="text-small card-slider__counter-total leading-trim is-hidden--sm-down">                              / 2
</span>
                            </p>
                            <div class="card-slider__text js-image-slider-content-controller" data-plugin="contentAnimation" data-content-animation-animations="{
            &#34;changeShow&#34;: {&#34;name&#34;: &#34;text&#34;, &#34;delay&#34;: 0.25},
            &#34;changeHide&#34;: {&#34;name&#34;: &#34;textOut&#34;}
        }" data-content-animation-plugins="controller events counter sticky height" data-content-animation-counter-selector=":root .js-image-slider-counter" data-content-animation-progress-selector=":root .js-image-slider-progress-item">
                              <div class="content-animation content-animation--center:md ">
                                <div data-content-animation-item="1" class="" aria-hidden="false" data-reveal="text">
                                  <p class="leading-trim">
                                    Glass wave forms on the ceilings make the interior a continuation of the architecture. Ceilings up to eight meters high, supported by unique inclined columns, give the lobby a sense of lightness and monumentality.
                                  </p>
                                </div>
                                <div data-content-animation-item="2" class="is-hidden" aria-hidden="true">
                                  <p class="leading-trim">
                                    Wood wall panels, high-tech media screens, natural stone floors, and premium upholstery communicate the status of AIR’s resident companies even before visitors reach the office spaces.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div data-plugin="contentAnimation" data-content-animation-animations="{
                &#34;changeShow&#34;: {&#34;name&#34;: &#34;fadeIn&#34;, &#34;delay&#34;: 0.25},
                &#34;changeHide&#34;: {&#34;name&#34;: &#34;fadeOut&#34;}
            }" data-content-animation-plugins="controller" data-content-animation-controller-selector=":root .js-image-slider-content-controller">
                              <div class="content-animation content-animation--center">
                                <div data-content-animation-item="1" class="" aria-hidden="false">
                                  <div class="row row--pad">
                                    <div class="col col--xs-6">
                                      <a class="btn btn--secondary btn--no-blur btn--vertical-between btn--rotation btn--full " href="/about">                                      <span class="btn__content">                                      <span class="btn__text ">                                      Learn more
</span>
                                      <span class="btn__icon ">                                      <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                                        <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                                        </use>
                                      </svg>
</span>
</span>
</a>
                                    </div>
                                  </div>
                                </div>
                                <div data-content-animation-item="2" class="is-hidden" aria-hidden="true">
                                  <div class="row row--pad">
                                    <div class="col col--xs-6">
                                      <a class="btn btn--secondary btn--no-blur btn--vertical-between btn--rotation btn--full " href="/about">                                      <span class="btn__content">                                      <span class="btn__text ">                                      Learn more
</span>
                                      <span class="btn__icon ">                                      <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                                        <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                                        </use>
                                      </svg>
</span>
</span>
</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col col--xs-12 image-slider-sticky__layer-col-background">
                          <picture class="background background--top l-status-slider-sticky-bg" data-parallax-pattern="landingStatusBackground" data-plugin="lazy parallax" draggable="false">
                            <source srcset="https://aircenter.space/assets/images/media/landing/7.status/background-bottom@xxxl.webp?v=1781014343" media="(min-width: 1920px) and (min-height: 700px)" />
                            <source srcset="https://aircenter.space/assets/images/media/landing/7.status/background-bottom@xxl.webp?v=1781014343" media="(min-width: 1440px) and (min-height: 700px)" />
                            <source srcset="https://aircenter.space/assets/images/media/landing/7.status/background-bottom@md.webp?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                            <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/landing/7.status/background-bottom@xs.webp?v=1781014343" alt="" style="--aspect-ratio: var(--xxxl, auto 2599 / 1318) var(--n-xxxl, var(--xxl, auto 2044 / 1036) var(--n-xxl, var(--md, auto 1460 / 740) var(--n-md, auto 780 / 940))); --ratio: var(--xxxl, 1.9719271623672) var(--n-xxxl, var(--xxl, 1.972972972973) var(--n-xxl, var(--md, 1.972972972973) var(--n-md, 0.82978723404255)));" />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="footer-office l-status-footer">
                    <div class="footer-office__content pb-layout row row--pad row--bottom-md is-hidden--sm-down">
                      <div class="col col--md-4">
                        <p class="leading-trim h1 text-color-heading" data-reveal="text">
                          Choose
                          <span class="sr-only">                          an office
</span>
                        </p>
                      </div>
                      <div class="col col--md-2">
                        <a class="btn btn--primary btn--vertical-between btn--rotation btn--full " href="/offices">                        <span class="btn__content">                        <span class="btn__text ">                        Estimer un trajet
</span>
                        <span class="btn__icon ">                        <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                          <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                          </use>
                        </svg>
</span>
</span>
</a>
                      </div>
                      <div class="col col--md-2">
                        <a class="btn btn--secondary btn--vertical-between btn--rotation btn--full " href="/visual-search">                        <span class="btn__content">                        <span class="btn__text ">                        Réserver en ligne
</span>
                        <span class="btn__icon ">                        <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                          <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                          </use>
                        </svg>
</span>
</span>
</a>
                      </div>
                      <div class="col col--md-4" aria-hidden="true">
                        <p class="leading-trim h1 text-color-heading text-right" data-reveal="text">
                          an office
                        </p>
                      </div>
                    </div>
                    <div class="footer-office__content row row--pad is-hidden--md-up">
                      <div class="col col--xs-6 offset--xs-3 pt-7 pb-8 pt-8:md">
                        <a class="btn btn--primary btn--vertical-between btn--rotation btn--full " href="/offices">                        <span class="btn__content">                        <span class="btn__text ">                        Réserver un chauffeur
</span>
                        <span class="btn__icon ">                        <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                          <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                          </use>
                        </svg>
</span>
</span>
</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer class="section section--no-overflow ui-dark ui-background footer  is-hidden--print " data-scroll-section="" data-themed-class="ui-dark">
            <div class="container-h pb-layout">
              <div class="footer__logo" data-nosnippet="">
                <picture class="img-full" data-plugin="lazy" draggable="false">
                  <source srcset="https://aircenter.space/assets/images/common/logo-footer.svg?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                  <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/common/logo-footer-xs.svg?v=1781014343" alt="AIR" style="--aspect-ratio: var(--md, auto 1420 / 140) var(--n-md, auto 351 / 80); --ratio: var(--md, 10.142857142857) var(--n-md, 4.3875);" />
                </picture>
                <div class="footer__logo-content mt-8 my-0:md">
                  <div class="is-hidden--sm-down">
                  </div>
                  <p class="leading-trim text-small mr-2:md">
                    © 2026 Cédric VTC
                  </p>
                  <a href="https://videinfra.com/luxury-real-estate-website-design-agency" target="_blank" rel="noopener" title="Luxury real estate website design agency" class="leading-trim text-small link-text ml-2:md">                  Site de prestige
</a>
                  <div class="is-hidden--sm-down">
                  </div>
                </div>
              </div>
              <p class="leading-trim text-small text-color-small text-center:md" data-nosnippet="">
                ANY INFORMATION PROVIDED ON THIS WEBSITE IS FOR INFORMATIONAL PURPOSES ONLY AND UNDER NO CIRCUMSTANCES CONSTITUTES A PUBLIC OFFER. THE FINISHED PROPERTIES MAY DIFFER FROM THE 3D VISUALISATIONS PRESENTED. ALL MATERIALS PRESENTED ARE FOR GUIDANCE ONLY AND ARE SUBJECT TO CHANGE. ALL PHOTOGRAPHS BELONG TO THEIR RESPECTIVE OWNERS AND ARE USED FOR DEMONSTRATION PURPOSES. PLEASE DO NOT USE THE CONTENT POSTED HERE FOR COMMERCIAL PURPOSES.
              </p>
            </div>
          </footer>
        </div>
        <div class="js-modal">
          <div class="modal modal--full modal--under-header modal--menu container-css-vars-h ui-light is-hidden" role="dialog" aria-hidden="true" aria-label="Меню" id="menu" data-plugin="modal menuLogo" data-modal-html-scroll-class-name="with-modal with-menu-modal" data-nosnippet="">
            <svg class="modal__logo is-hidden--md-up" xmlns="http://www.w3.org/2000/svg" width="71" height="30" viewBox="0 0 71 30" fill="none">
              <path fill="#000" d="M38.1 0H34v30h4.2zM49.8 3.5h10.1A5.8 5.8 0 1 1 60 15H49.8zM71 30l-9.2-11.5a9.3 9.3 0 0 0 8.1-9.2C70 4.2 65.8 0 60.6 0h-15v30h4.2V18.5h6.7L65.7 30zM8.7 18.5l5.8-15h.7l5.8 15zm21 11.5L18 0h-6.4L0 30h4.2l3.1-8h15l3.1 8z">
              </path>
            </svg>
            <svg class="modal__logo is-hidden--sm-down" xmlns="http://www.w3.org/2000/svg" width="120" height="50" viewBox="0 0 120 50" fill="none">
              <path fill="#000" d="m14.4 30.9 9.7-25h1.1l9.6 25zM42.2 50h7L30 0H19.3L0 50h7l5.2-13.2h25zM64.4 0h-7.1v50h7.1zM84.4 5.9h16.8a9.6 9.6 0 0 1 0 19.1H84.4zM119.6 50l-15.4-19.2A15.5 15.5 0 0 0 102.3 0H77.4v50h7V30.9h11.2l15.2 19z">
              </path>
            </svg>
            <div class="modal__background">
            </div>
            <div class="modal__background-image">
              <picture class="background background--top" data-plugin="lazy" draggable="false">
                <source srcset="https://aircenter.space/assets/images/common/menu/background@xxxl.webp?v=1781014343" media="(min-width: 1920px) and (min-height: 700px)" />
                <source srcset="https://aircenter.space/assets/images/common/menu/background@xxl.webp?v=1781014343" media="(min-width: 1440px) and (min-height: 700px)" />
                <source srcset="https://aircenter.space/assets/images/common/menu/background@md.webp?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/common/menu/background@xs.webp?v=1781014343" alt="" style="--aspect-ratio: var(--xxxl, auto 2599 / 1389) var(--n-xxxl, var(--xxl, auto 2044 / 1092) var(--n-xxl, var(--md, auto 1460 / 780) var(--n-md, auto 780 / 420))); --ratio: var(--xxxl, 1.8711303095752) var(--n-xxxl, var(--xxl, 1.8717948717949) var(--n-xxl, var(--md, 1.8717948717949) var(--n-md, 1.8571428571429)));" />
              </picture>
            </div>
            <div class="modal__animation">
              <div class="modal__scroller">
                <div class="modal__scroller__scrollable js-scroll-parent">
                  <div class="modal__content-wrapper js-modal-scrollable-content">
                    <div class="modal__content js-modal-ignore-auto-close js-scroll-parent-ignore">
                      <div class="container-h" data-themed-class="ui-light">
                        <div class="row row--pad">
                          <div class="col col--xs-12 col--md-6 offset--md-3">
                            <div class="menu">
                              <div class="menu__layout-left">
                                <ul class="menu__list menu__list--large mb-1 mb-2:md">
                                  <li class="menu__item">
                                    <a href="/about" class="menu__link leading-trim ">                                    Notre Flotte
</a>
                                  </li>
                                  <li class="menu__item">
                                    <a href="/location" class="menu__link leading-trim ">                                    Location
</a>
                                  </li>
                                  <li class="menu__item">
                                    <a href="/management-service" class="menu__link leading-trim ">                                    Project management
</a>
                                  </li>
                                  <li class="menu__item">
                                    <a href="/investment" class="menu__link leading-trim ">                                    Investment
</a>
                                  </li>
                                </ul>
                                <ul class="menu__list">
                                  <li class="menu__item">
                                    <a href="/progress" class="menu__link text-small leading-trim">                                    Prestations VIP
</a>
                                  </li>
                                  <li class="menu__item">
                                    <a href="/news" class="menu__link text-small leading-trim">                                    Services à bord
</a>
                                  </li>
                                  <li class="menu__item">
                                    <a href="/developer" class="menu__link text-small leading-trim">                                    À propos de Cédric
</a>
                                  </li>
                                </ul>
                              </div>
                              <div class="menu__layout-right">
                                <a class="menu__card btn-container" href="/offices">                                <span class="text-small leading-trim is-hidden--md-up">                                Choose an
                                <br />
                                office
</span>
                                <span class="text-small leading-trim is-hidden--sm-down">                                Choose an
 office
</span>
                                <span class="btn btn--secondary btn--sm btn--square btn--rotation menu__card-button btn--no-blur ">                                <span class="btn__content">                                <span class="btn__icon ">                                <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                                  <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                                  </use>
                                </svg>
</span>
</span>
</span>
</a>
                                <a class="menu__card btn-container" href="/parking">                                <span class="text-small leading-trim is-hidden--md-up">                                Choose a
                                <br />
                                parking spot
</span>
                                <span class="text-small leading-trim is-hidden--sm-down">                                Choose a
 parking spot
</span>
                                <span class="btn btn--secondary btn--sm btn--square btn--rotation menu__card-button btn--no-blur ">                                <span class="btn__content">                                <span class="btn__icon ">                                <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                                  <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                                  </use>
                                </svg>
</span>
</span>
</span>
</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal ui-light modal--side is-hidden" role="dialog" aria-hidden="true" aria-label="Request a call" id="callback" data-plugin="modal callbackModal" data-modal-html-scroll-class-name="with-modal with-modal-full" data-nosnippet="">
            <div class="modal__background">
            </div>
            <div class="modal__animation">
              <div class="modal__scroller">
                <div class="modal__scroller__scrollable js-scroll-parent">
                  <div class="modal__content-wrapper js-modal-scrollable-content">
                    <div class="modal__content js-modal-ignore-auto-close js-scroll-parent-ignore">
                      <a class="btn btn--secondary btn--sm btn--square btn--rotation modal__close  js-modal-close " aria-label="Close" data-plugin="parallax" data-parallax-enable-not-smooth-scroll="false" data-parallax-clamp="false" data-parallax-0svh="{&#34;transform&#34;: &#34;translateY(0svh)&#34;}" data-parallax-100svh="{&#34;transform&#34;: &#34;translateY(100svh)&#34;}" tabindex="0" role="button">                      <span class="btn__content">                      <span class="btn__icon ">                      <svg class="icon icon-close" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
                        <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#close" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#close">
                        </use>
                      </svg>
</span>
</span>
</a>
                      <picture class="background background--top" data-plugin="lazy" draggable="false">
                        <source srcset="https://aircenter.space/assets/images/media/callback/background@xxxl.webp?v=1781014343" media="(min-width: 1920px) and (min-height: 700px)" />
                        <source srcset="https://aircenter.space/assets/images/media/callback/background@xxl.webp?v=1781014343" media="(min-width: 1440px) and (min-height: 700px)" />
                        <source srcset="https://aircenter.space/assets/images/media/callback/background@md.webp?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                        <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/callback/background@xs.webp?v=1781014343" alt="" style="--aspect-ratio: var(--xxxl, auto 1317 / 855) var(--n-xxxl, var(--xxl, auto 1036 / 672) var(--n-xxl, var(--md, auto 740 / 480) var(--n-md, auto 780 / 720))); --ratio: var(--xxxl, 1.540350877193) var(--n-xxxl, var(--xxl, 1.5416666666667) var(--n-xxl, var(--md, 1.5416666666667) var(--n-md, 1.0833333333333)));" />
                      </picture>
                      <div class="container-h">
                        <form name="contact" method="post" action="/ajax/contact.json" data-plugin="ajaxForm comagicForm recaptcha" data-recaptcha-type="google" data-recaptcha2-key="6Lcu2YYUAAAAANyPXGW5ZY3Xi1t69lirdAD2t9Gx" data-recaptcha3-key="6Lfi1oYUAAAAAJmtZzvPF61VLUBPSLuSvrVsJ7V0">
                          <div class="js-form-content py-layout callback-modal-form">
                            <p role="heading" aria-level="2" class="h2 leading-trim pb-2 callback-modal-form__title">
                              Request a call
                            </p>
                            <div class="row row--pad callback-modal-form__content">
                              <div class="col col--md-8 offset--md-2">
                                <input data-plugin="utmData" type="hidden" name="utm" value="" />
                                <input data-plugin="pagePathname" type="hidden" name="currentPageLink" value="" />
                                <script type="text/template" data-template-variable="values">
                                  &lt;div&gt;
                        &lt;% if (values.nr) { %&gt;
                            &lt;% for (const nr of values.nr) { %&gt;
                                &lt;input type=&#34;hidden&#34; name=&#34;contact[additionalData][nr][]&#34; value=&#34;&lt;%= nr %&gt;&#34; /&gt;
                            &lt;% } %&gt;
                        &lt;% } %&gt;
                    &lt;/div&gt;
                                </script>
                                <div class="form-group">
                                  <div class="
        form-control form-control--input
        form-control--float                        
    " data-plugin="inputState  ">
                                    <input id="text-544767" name="contact[name]" type="text" required="" placeholder="Your name" data-msg-required="Enter your name" maxlength="50" value="" />
                                    <label for="text-544767" class="form-label leading-trim ">
                                      Your name
                                    </label>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="
        form-control form-control--input
        form-control--float                        
    " data-plugin="inputState  inputMask" data-input-mask-mask="+7 ### ### ## ##">
                                    <input id="text-479062" name="contact[phone]" type="tel" required="" placeholder="+7 " data-msg-required="Enter your phone number" maxlength="20" autocapitalize="none" value="" />
                                    <label for="text-479062" class="form-label leading-trim ">
                                      Phone number
                                    </label>
                                  </div>
                                </div>
                                <div class="form-group-large">
                                  <p class="text-small leading-trim form-consent">
                                    By clicking the “Call me back” button, you
                                    <a href="/user-agreement" target="_blank">                                    consent
</a>
                                    to the processing of
                                    <a href="/privacy-policy" target="_blank">                                    your personal data
</a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="form-footer callback-modal-form__footer">
                              <div class="row row--pad row--bottom-xs">
                                <div class="col col--xs-6 col--md-4 offset--md-2">
                                  <div class="error-message text-small leading-trim js-form-error-message is-hidden" role="alert" aria-live="assertive">
                                  </div>
                                </div>
                                <div class="col col--xs-6 col--md-4">
                                  <button class="btn btn--primary btn--full btn--vertical-between btn--rotation btn--submit" type="submit">
                                    <span class="btn__content">                                    <span class="btn__text ">                                    Call me back
</span>
                                    <span class="btn__icon ">                                    <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                                      <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                                      </use>
                                    </svg>
                                    <span class="spinner spinner--small"></span>
</span>
</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="is-hidden js-form-success py-layout callback-modal-success">
                            <p role="heading" aria-level="2" class="h2 leading-trim">
                              Thank you!
                            </p>
                            <p class="leading-trim text-center">
                              We’ve received your request
                              <br />
                              and will contact you shortly
                            </p>
                            <div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal ui-light modal--side modal--side--left modal--side--wide is-hidden" role="dialog" aria-hidden="true" aria-label="Favorites" id="favourites" data-plugin="modal" data-modal-html-scroll-class-name="with-modal with-modal-full" data-nosnippet="">
            <div class="modal__background">
            </div>
            <div class="modal__animation">
              <div class="modal__scroller">
                <div class="modal__scroller__scrollable js-scroll-parent">
                  <div class="modal__content-wrapper js-modal-scrollable-content">
                    <div class="modal__content js-modal-ignore-auto-close js-scroll-parent-ignore">
                      <a class="btn btn--secondary btn--sm btn--square btn--rotation modal__close  js-modal-close " aria-label="Close" data-plugin="parallax" data-parallax-enable-not-smooth-scroll="false" data-parallax-clamp="false" data-parallax-0svh="{&#34;transform&#34;: &#34;translateY(0svh)&#34;}" data-parallax-100svh="{&#34;transform&#34;: &#34;translateY(100svh)&#34;}" tabindex="0" role="button">                      <span class="btn__content">                      <span class="btn__icon ">                      <svg class="icon icon-close" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
                        <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#close" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#close">
                        </use>
                      </svg>
</span>
</span>
</a>
                      <div data-plugin="favouriteList" data-favourite-list-endpoint="/ajax/offices/favourites">
                        <div class="js-favourite-list-wrapper-list is-hidden">
                          <div class="px-layout py-layout">
                            <p class="h1 leading-trim" role="heading" aria-level="2">
                              Favorites
                            </p>
                            <p class="text-small leading-trim pt-layout" data-plugin="favouriteCounter">
                              <script type="text/template" data-template-variable="item">
                                &lt;%- transchoice(item.count, [
                        &#39;%count% offices&#39;,  // 0
                        &#39;%count% office&#39;, // 1, 21, ...
                        &#39;%count% offices&#39;, // 2, 3, 4, 22, 23, ...
                        &#39;%count% offices&#39;   // ...
                        ]) %&gt;
                              </script>
                            </p>
                            <div class="group group--nav mb-layout favourites-buttons">
                              <a class="btn btn--primary btn--sm is-hidden--sm-down " href="#favourites-email">                              <span class="btn__content">                              <span class="btn__text ">                              Send by email
</span>
</span>
</a>
                              <a class="btn btn--primary btn--square btn--sm is-hidden--md-up " href="#favourites-email" aria-label="Send by email">                              <span class="btn__content">                              <span class="btn__icon ">                              <svg class="icon icon-email" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
                                <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#email" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#email">
                                </use>
                              </svg>
</span>
</span>
</a>
                              <a class="btn btn--secondary btn--sm group__right js-favourite-list-save " target="_blank" rel="noopener" href="#">                              <span class="btn__content">                              <span class="btn__text ">                              Save favorites
</span>
</span>
</a>
                            </div>
                            <ol class="offices-list ajaxlist-list ajaxlist-list--narrow js-favourite-list-list" data-view-style="list">
                              <script type="text/template" data-template-variable="office">
                                &lt;li&gt;
        &lt;&lt;%- office.disabled ? &#39;div&#39; : &#39;a&#39; %&gt;
            class=&#34;card-office ui-background-alt img-rounded px-layout py-layout &lt;% if (office.disabled) { %&gt;card-office--disabled&lt;% } %&gt;&#34;
            &lt;% if (!office.disabled) { %&gt;href=&#34;&lt;%- office.link %&gt;&#34;&lt;% } %&gt;
        &gt;
            &lt;div
                class=&#34;card-office__plan&#34;

                                    data-plugin=&#34;popover&#34;
                    data-popover-placement=&#34;right&#34;
                    data-popover-events=&#34;hover&#34;
                    aria-describedby=&#34;popover-plan-&lt;%- office.id %&gt;&#34;
                            &gt;
                &lt;%= lazyImage(office.plan, {
                    class: &#39;img-full svg-fix&#39;,
                    width: 540,
                    height: 420,
                    alt: &#39;office №&#39; + office.nr,
                    lazy: false,
                }) %&gt;

                &lt;% if (office.disabled) { %&gt;
                    &lt;div class=&#34;card-office__plan-disabled&#34;&gt;
                        &lt;svg class=&#34;icon icon-lock&#34; width=&#34;20&#34; height=&#34;20&#34; aria-hidden=&#34;true&#34;            viewBox=&#34;0 0 20 20&#34;
            style=&#34;--icon-width: 20; --icon-height: 20;&#34;
        &gt;&lt;use href=&#34;&amp;#x2F;assets&amp;#x2F;images&amp;#x2F;icons.svg&amp;#x3F;v&amp;#x3D;1781014343#lock&#34; xlink:href=&#34;&amp;#x2F;assets&amp;#x2F;images&amp;#x2F;icons.svg&amp;#x3F;v&amp;#x3D;1781014343#lock&#34;&gt;&lt;/use&gt;&lt;/svg&gt;
                    &lt;/div&gt;
                &lt;% } %&gt;
            &lt;/div&gt;

            &lt;div class=&#34;card-office__text&#34;&gt;
                &lt;div class=&#34;card-office__text-item text-color-heading&#34;&gt;office №&lt;%- office.nr %&gt;&lt;/div&gt;
                &lt;div class=&#34;card-office__text-item text-color-text&#34;&gt;&lt;%- office.area %&gt; m&lt;sup&gt;2&lt;/sup&gt;&lt;/div&gt;
                &lt;div class=&#34;card-office__text-item text-color-text&#34;&gt;Floor &lt;%- office.floor %&gt;&lt;/div&gt;
                &lt;div class=&#34;card-office__text-item card-office__is-hidden-list text-color-text&#34;&gt;Building &lt;%- office.building %&gt;&lt;/div&gt;
                &lt;div class=&#34;card-office__text-item card-office__is-hidden-card text-color-text&#34; aria-label=&#34;Building &lt;%- office.building %&gt;&#34;&gt;B&lt;%- office.building %&gt;&lt;/div&gt;
            &lt;/div&gt;

            
&lt;div class=&#34;price card-office__price&#34;&gt;
    &lt;% if (office.areaPrice) { %&gt;
        &lt;span class=&#34;price__area text-small leading-trim&#34;&gt;
            &lt;%- numberFormat(office.areaPrice, 0, &#39;&#39;, &#39; &#39;) %&gt; / м&lt;sup&gt;2&lt;/sup&gt;
        &lt;/span&gt;
    &lt;% } %&gt;
    &lt;span class=&#34;price__inner&#34;&gt;
        &lt;span class=&#34;price__inner-actual leading-trim&#34;&gt;
            &lt;%- numberFormat(office.actualPrice, 0, &#39;&#39;, &#39; &#39;) %&gt;
        &lt;/span&gt;
        &lt;% if (office.discountPrice &amp;&amp; office.discountPrice &lt; office.originalPrice) { %&gt;
            &lt;del class=&#34;price__inner-old leading-trim&#34;&gt;
                &lt;%- numberFormat(office.originalPrice, 0, &#39;&#39;, &#39; &#39;) %&gt;
            &lt;/del&gt;
            &lt;% if (office.showDiscountPercentage !== false) { %&gt;
                &lt;span class=&#34;price__inner-discount leading-trim&#34;&gt;
                    &lt;%- numberFormat((1 - office.discountPrice / office.originalPrice) * -100, 0, &#39;&#39;, &#39; &#39;) %&gt;%
                &lt;/span&gt;
            &lt;% } %&gt;
        &lt;% } %&gt;
    &lt;/span&gt;
&lt;/div&gt;

            &lt;div class=&#34;card-office__favourite&#34;&gt;
                

        

            
        
                                                                          
                        

        
        
        
        
    &lt;span
        class=&#34;btn btn--square btn--secondary btn--no-blur btn--sm &#34;
                                        aria-label=&#34;Add apartment to favourites&#34;
                            data-plugin=&#34;favourite&#34;
                                                data-favourite=&#34;&amp;#x7B;&amp;quot;id&amp;quot;&amp;#x3A;&amp;quot;&amp;lt;&amp;#x25;-&amp;#x20;office.id&amp;#x20;&amp;#x25;&amp;gt;&amp;quot;,&amp;quot;externalId&amp;quot;&amp;#x3A;&amp;quot;&amp;lt;&amp;#x25;-&amp;#x20;office.externalId&amp;#x20;&amp;#x25;&amp;gt;&amp;quot;,&amp;quot;price&amp;quot;&amp;#x3A;&amp;quot;&amp;lt;&amp;#x25;-&amp;#x20;office.actualPrice&amp;#x20;&amp;#x25;&amp;gt;&amp;quot;,&amp;quot;sizeClass&amp;quot;&amp;#x3A;&amp;quot;btn--sm&amp;quot;,&amp;quot;activeClass&amp;quot;&amp;#x3A;&amp;quot;is-active&amp;#x20;btn--primary&amp;quot;,&amp;quot;inactiveClass&amp;quot;&amp;#x3A;&amp;quot;btn--secondary&amp;#x20;btn--no-blur&amp;quot;,&amp;quot;wrapperSelector&amp;quot;&amp;#x3A;&amp;quot;.js-favourite-wrapper&amp;quot;,&amp;quot;wrapperActiveClass&amp;quot;&amp;#x3A;&amp;quot;&amp;quot;,&amp;quot;wrapperInactiveClass&amp;quot;&amp;#x3A;&amp;quot;&amp;quot;,&amp;quot;wrapperRemoveInactive&amp;quot;&amp;#x3A;false,&amp;quot;labelActive&amp;quot;&amp;#x3A;&amp;quot;Remove&amp;#x20;apartment&amp;#x20;from&amp;#x20;favourites&amp;quot;,&amp;quot;labelInactive&amp;quot;&amp;#x3A;&amp;quot;Add&amp;#x20;apartment&amp;#x20;to&amp;#x20;favourites&amp;quot;,&amp;quot;isInsideLink&amp;quot;&amp;#x3A;true,&amp;quot;isPdfAvailable&amp;quot;&amp;#x3A;&amp;quot;&amp;lt;&amp;#x25;-&amp;#x20;office.isPdfAvailable&amp;#x20;&amp;#x25;&amp;gt;&amp;quot;&amp;#x7D;&#34;
                            &gt;
        
        &lt;span class=&#34;btn__content&#34;&gt;
            
                                    
                                                                    &lt;span class=&#34;btn__icon &#34;&gt;
                        &lt;svg class=&#34;icon icon-favourite&#34; width=&#34;20&#34; height=&#34;20&#34; aria-hidden=&#34;true&#34;            viewBox=&#34;0 0 20 20&#34;
            style=&#34;--icon-width: 20; --icon-height: 20;&#34;
        &gt;&lt;use href=&#34;/assets/images/icons.svg?v=1781014343#favourite&#34; xlink:href=&#34;/assets/images/icons.svg?v=1781014343#favourite&#34;&gt;&lt;/use&gt;&lt;/svg&gt;

                                            &lt;/span&gt;
                                    &lt;/span&gt;

            &lt;/span&gt;
            &lt;/div&gt;

                                            &lt;div id=&#34;popover-plan-&lt;%- office.id %&gt;&#34; class=&#34;tooltip tooltip--office-card&#34; role=&#34;tooltip&#34;&gt;
                    &lt;div class=&#34;tooltip__content&#34;&gt;
                        &lt;%= lazyImage(office.plan, {
                            class: &#39;img-full svg-fix&#39;,
                            width: 540,
                            height: 420,
                            alt: &#39;office №&#39; + office.nr,
                        }) %&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                    &lt;/&lt;%- office.disabled ? &#39;div&#39; : &#39;a&#39; %&gt;&gt;
    &lt;/li&gt;
                              </script>
                            </ol>
                          </div>
                        </div>
                        <div class="favourites-empty-view js-favourite-list-wrapper-empty">
                          <picture class="background background--top" data-plugin="lazy" draggable="false">
                            <source srcset="https://aircenter.space/assets/images/media/favourites/background@xxxl.webp?v=1781014343" media="(min-width: 1920px) and (min-height: 700px)" />
                            <source srcset="https://aircenter.space/assets/images/media/favourites/background@xxl.webp?v=1781014343" media="(min-width: 1440px) and (min-height: 700px)" />
                            <source srcset="https://aircenter.space/assets/images/media/favourites/background@md.webp?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                            <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/favourites/background@xs.webp?v=1781014343" alt="" style="--aspect-ratio: var(--xxxl, auto 1744 / 1389) var(--n-xxxl, var(--xxl, auto 1372 / 1092) var(--n-xxl, var(--md, auto 980 / 780) var(--n-md, auto 780 / 1080))); --ratio: var(--xxxl, 1.2555795536357) var(--n-xxxl, var(--xxl, 1.2564102564103) var(--n-xxl, var(--md, 1.2564102564103) var(--n-md, 0.72222222222222)));" />
                          </picture>
                          <div class="px-layout py-layout p-relative">
                            <p class="h1 leading-trim" role="heading" aria-level="2">
                              Favorites
                            </p>
                            <div class="favourites-empty-text">
                              <p class="text-small text-baseline leading-trim">
                                Your selected offices will appear here
                              </p>
                            </div>
                          </div>
                          <a class="btn btn--primary btn--vertical-between btn--rotation favourites-empty-button " href="/offices">                          <span class="btn__content">                          <span class="btn__text ">                          Réserver un chauffeur
</span>
                          <span class="btn__icon ">                          <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                            <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                            </use>
                          </svg>
</span>
</span>
</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal ui-light modal--side is-hidden" role="dialog" aria-hidden="true" aria-label="Send by email" id="favourites-email" data-plugin="modal" data-modal-html-scroll-class-name="with-modal with-modal-full" data-nosnippet="">
            <div class="modal__background">
            </div>
            <div class="modal__animation">
              <div class="modal__scroller">
                <div class="modal__scroller__scrollable js-scroll-parent">
                  <div class="modal__content-wrapper js-modal-scrollable-content">
                    <div class="modal__content js-modal-ignore-auto-close js-scroll-parent-ignore">
                      <a class="btn btn--secondary btn--sm btn--square btn--rotation modal__close  js-modal-close " aria-label="Close" data-plugin="parallax" data-parallax-enable-not-smooth-scroll="false" data-parallax-clamp="false" data-parallax-0svh="{&#34;transform&#34;: &#34;translateY(0svh)&#34;}" data-parallax-100svh="{&#34;transform&#34;: &#34;translateY(100svh)&#34;}" tabindex="0" role="button">                      <span class="btn__content">                      <span class="btn__icon ">                      <svg class="icon icon-close" width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" style="--icon-width: 20; --icon-height: 20;">
                        <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#close" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#close">
                        </use>
                      </svg>
</span>
</span>
</a>
                      <picture class="background background--top" data-plugin="lazy" draggable="false">
                        <source srcset="https://aircenter.space/assets/images/media/callback/background@xxxl.webp?v=1781014343" media="(min-width: 1920px) and (min-height: 700px)" />
                        <source srcset="https://aircenter.space/assets/images/media/callback/background@xxl.webp?v=1781014343" media="(min-width: 1440px) and (min-height: 700px)" />
                        <source srcset="https://aircenter.space/assets/images/media/callback/background@md.webp?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
                        <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/media/callback/background@xs.webp?v=1781014343" alt="" style="--aspect-ratio: var(--xxxl, auto 1317 / 855) var(--n-xxxl, var(--xxl, auto 1036 / 672) var(--n-xxl, var(--md, auto 740 / 480) var(--n-md, auto 780 / 720))); --ratio: var(--xxxl, 1.540350877193) var(--n-xxxl, var(--xxl, 1.5416666666667) var(--n-xxl, var(--md, 1.5416666666667) var(--n-md, 1.0833333333333)));" />
                      </picture>
                      <div class="container-h">
                        <form name="favourites_email" method="post" action="/ajax/offices/favourites/mail" data-plugin="ajaxForm favouriteForm recaptcha" data-recaptcha-type="google" data-recaptcha2-key="6Lcu2YYUAAAAANyPXGW5ZY3Xi1t69lirdAD2t9Gx" data-recaptcha3-key="6Lfi1oYUAAAAAJmtZzvPF61VLUBPSLuSvrVsJ7V0">
                          <div class="js-form-content py-layout callback-modal-form">
                            <p role="heading" aria-level="2" class="h2 leading-trim pb-2 callback-modal-form__title">
                              Send by email
                            </p>
                            <div class="row row--pad callback-modal-form__content">
                              <div class="col col--md-8 offset--md-2">
                                <input data-plugin="utmData" type="hidden" name="utm" value="" />
                                <input data-plugin="pagePathname" type="hidden" name="currentPageLink" value="" />
                                <div class="form-group">
                                  <div class="
        form-control form-control--input
        form-control--float                        
    " data-plugin="inputState  ">
                                    <input id="text-322701" name="favourites_email[email]" type="email" required="" placeholder="Send by email" data-msg-required="Please enter a valid email address" maxlength="50" autocapitalize="none" value="" />
                                    <label for="text-322701" class="form-label leading-trim ">
                                      Send by email
                                    </label>
                                  </div>
                                </div>
                                <div class="form-group-large">
                                  <p class="text-small leading-trim form-consent">
                                    By clicking the “Send” button, you
                                    <a href="/user-agreement" target="_blank">                                    consent
</a>
                                    to the processing of
                                    <a href="/privacy-policy" target="_blank">                                    your personal data
</a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="form-footer callback-modal-form__footer">
                              <div class="row row--pad row--bottom-xs">
                                <div class="col col--xs-6 col--md-4 offset--md-2">
                                  <div class="error-message text-small leading-trim js-form-error-message is-hidden" role="alert" aria-live="assertive">
                                  </div>
                                </div>
                                <div class="col col--xs-6 col--md-4">
                                  <button class="btn btn--primary btn--full btn--vertical-between btn--rotation btn--submit" type="submit">
                                    <span class="btn__content">                                    <span class="btn__text ">                                    Send
</span>
                                    <span class="btn__icon ">                                    <svg class="icon icon-more" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" style="--icon-width: 16; --icon-height: 16;">
                                      <use href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more" href="https://aircenter.space/assets/images/icons.svg?v=1781014343#more">
                                      </use>
                                    </svg>
                                    <span class="spinner spinner--small"></span>
</span>
</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="is-hidden js-form-success py-layout callback-modal-success">
                            <p role="heading" aria-level="2" class="h2 leading-trim">
                              Thank you!
                            </p>
                            <p class="leading-trim text-center">
                              The layouts have been sent by email.
                            </p>
                            <div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dialog open="" aria-label="Cookie consent" aria-describedby="cookie-consent-description" class="cookie-consent cookie-consent--simple ui-light" data-plugin="cookieConsent" id="cookie-consent">
      <div class="container-h cookie-consent__container ui-background">
        <p id="cookie-consent-description" class="cookie-consent__description text-small leading-trim">
          This website uses
          <a class="btn btn--link btn--link-heading " href="/privacy-policy" aria-label="Learn more about cookies">          <span class="btn__content">          <span class="btn__text ">          cookies
</span>
</span>
</a>
        </p>
        <a class="btn btn--xs btn--secondary js-cookie-consent-accept " aria-label="Accept all cookies" tabindex="0" role="button">        <span class="btn__content">        <span class="btn__text ">        Accept
</span>
</span>
</a>
      </div>
    </dialog>
    <script>
      if ((document.cookie.indexOf(&#39;cookieConsentStatus=1&#39;) !== -1 || document.cookie.indexOf(&#39;cookieConsentStatus=0&#39;) !== -1) &amp;&amp; document.querySelector(&#39;#cookie-consent&#39;)) {
        document.querySelector(&#39;#cookie-consent&#39;).classList.add(&#39;is-hidden&#39;)
    } else {
        document.documentElement.classList.add(&#39;with-cookie-consent&#39;);
    }
    </script>
    <div class="turn-message text-center ui-light ui-background is-hidden--xs is-hidden--lg-up" data-nosnippet="">
      <div class="turn-message__header">
        <img class="svg-fix turn-message__is-hidden-large" draggable="false" data-plugin="lazy" loading="lazy" width="50" height="20" alt="AIR" style="--aspect-ratio: auto 50 / 20; --ratio: 2.5;" src="https://aircenter.space/assets/images/common/turn-message/logo@xs.svg?v=1781014343" />
        <img class="svg-fix turn-message__is-hidden-small" draggable="false" data-plugin="lazy" loading="lazy" width="71" height="30" alt="AIR" style="--aspect-ratio: auto 71 / 30; --ratio: 2.3666666666667;" src="https://aircenter.space/assets/images/common/turn-message/logo@lg.svg?v=1781014343" />
      </div>
      <div>
      </div>
      <picture class="svg-fix turn-message__is-hidden-large" data-plugin="lazy" draggable="false">
        <source srcset="https://aircenter.space/assets/images/common/turn-message/icon@md.svg?v=1781014343" media="(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)" />
        <img draggable="false" loading="lazy" src="https://aircenter.space/assets/images/common/turn-message/icon@xs.svg?v=1781014343" alt="" style="--aspect-ratio: auto 82 / 82; --ratio: 1;" />
      </picture>
      <img class="svg-fix turn-message__is-hidden-small" alt="" draggable="false" data-plugin="lazy" loading="lazy" width="122" height="122" style="--aspect-ratio: auto 122 / 122; --ratio: 1;" src="https://aircenter.space/assets/images/common/turn-message/icon@lg.svg?v=1781014343" />
      <p class="turn-message__text leading-trim">
        Для корректной работы
        <br />
        <span class="text-color-heading">        пожалуйста, поверните телефон
</span>
      </p>
    </div>
    <script fetchpriority="low" src="/assets/javascripts/shared.js?v=1781014343">
    </script>
    <script>
      var LOCALES = {
                                    &#39;errors&#39;: {
                        &#39;email&#39;: &#39;Please enter a valid email address&#39;,
                        &#39;required&#39;: &#39;Please complete this field&#39;,
                        &#39;tel&#39;: &#39;Please enter a valid phone number&#39;,
                        &#39;minlength&#39;: &#39;Please enter at least {0} characters&#39;,

                        &#39;generic&#39;: &#39;Connection error, please try again&#39;,
                        &#39;genericCode&#39;: &#39;Error occurred, please try again&#39;,
                    }
                            };
    </script>
    <script fetchpriority="low" src="/assets/javascripts/landing.js?v=1781014343">
    </script>
    <script fetchpriority="low" async="" src="/assets/javascripts/browser-message/browser-message.js?v=1781014343">
    </script>
    <script>
      (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement(&#39;script&#39;);d.innerHTML=&#34;window.__CF\$cv\$params={r:&#39;a13620502bdef415&#39;,t:&#39;MTc4Mjc0ODYzOA==&#39;};var a=document.createElement(&#39;script&#39;);a.src=&#39;/cdn-cgi/challenge-platform/scripts/jsd/main.js&#39;;document.getElementsByTagName(&#39;head&#39;)[0].appendChild(a);&#34;;b.getElementsByTagName(&#39;head&#39;)[0].appendChild(d)}}if(document.body){var a=document.createElement(&#39;iframe&#39;);a.height=1;a.width=1;a.style.position=&#39;absolute&#39;;a.style.top=0;a.style.left=0;a.style.border=&#39;none&#39;;a.style.visibility=&#39;hidden&#39;;document.body.appendChild(a);if(&#39;loading&#39;!==document.readyState)c();else if(window.addEventListener)document.addEventListener(&#39;DOMContentLoaded&#39;,c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);&#39;loading&#39;!==document.readyState&amp;&amp;(document.onreadystatechange=e,c())}}}})();
    </script>
  `;
