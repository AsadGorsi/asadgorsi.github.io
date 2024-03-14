(async () => {
    $.getJSON("./assets/data/data.json", (data) => {

        $(".intro_text").append(`
            <svg viewBox="0 0 1320 300">
                <text x="50%" Y="50%" text-anchor="middle">
                    HI
                </text>
            </svg>
        `)

        //#region Hero
        $(".hero-content-box").append(`
            <span class="hero-sub-title wow fadeInLeft" data-wow-delay="1.1s">I am ${data.fullName}</span>
            <h1 class="hero-title wow fadeInLeft" data-wow-delay="1.2s">${data.profession} +<br>3D Designer</h1>
            <div class="hero-image-box d-md-none text-center wow fadeInRight" data-wow-delay="1.3s">
                <img src="${data.profileImageUrl}" alt="">
            </div>
            <p class="lead wow fadeInLeft" data-wow-delay="1.4s">${data.tagline}</p>
            <div class="button-box d-flex flex-wrap align-items-center">
                <a href="assets/img/CV.pdf" class="btn tj-btn-secondary wow fadeInLeft" data-wow-delay="1.5s">Download CV</a>
            </div>
        `);

        $(".hero-image-box").append(`<img src="${data.profileImageUrl}" alt="${data.fullName}'s Profile Image">`);

        $.each(data.socialLinks, (i, sl) => {
            $(".hero-content-box .button-box.d-flex.flex-wrap.align-items-center").append(`
                <ul class="ul-reset social-icons wow fadeInLeft" data-wow-delay="1.6s">
                    <li><a href="${sl.link}" target="_blank"><i class="${sl.icon}"></i></a></li>
                </ul>
            `)
        })

        $.each(data.funFactArea, (i, ffa) => {
            $(".funfact-area .row").append(`
                <div class="col-6 col-lg-3">
                    <div class="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                        <div class="number"><span class="odometer" data-count="${ffa.dataCount}">${ffa.dataCount}</span></div>
                        <div class="text">${ffa.yearsOrExpOrState} <br>${ffa.achievement}</div>
                    </div>
                </div>
            `)
        })
        //#endregion Hero

        //#region Services
        $.each(data.services, (i, s) => {
            $(".services-widget").append(`
                <div class="service-item ${s.current} d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".5s">
                    <div class="left-box d-flex flex-wrap align-items-center">
                        <span class="number">0${i + 1}</span>
                        <h3 class="service-title">${s.name}</h3>
                    </div>
                    <div class="right-box">
                        <p>${s.description}</p>
                    </div>
                    <!-- <i class="flaticon-up-right-arrow"></i> -->
                    <!-- <button data-mfp-src="#service-wrapper" class="service-link modal-popup"></button> -->
                </div>
          `);
        });
        //#endregion Service

        //#region Portfolios
        // $.each(data.portfolioHeadings, (i, ph) => {
        //     $(`.filter-button-group`).append(`<button data-filter="${ph.dataFilter}" class="${ph.class}">${ph.name}</button>`);
        // });

        // $.each(data.portfolios, (i, p) => {
        //     $(`.portfolio-box .row`).append(`
        //         <div class="col-3 portfolio-item logodesign">
        //             <div class="image-box">
        //                 <img src="${p.imageUrl}" alt="${p.name} portfolio image">
        //             </div>
        //             <div class="content-box">
        //                 <h3 class="portfolio-title">${p.name}</h3>
        //                 <!-- <p>Cosmetic company logo design</p> -->
        //                 <i class="flaticon-up-right-arrow"></i>
        //                 <button data-mfp-src="#${p.dataMfpSrc}" class="portfolio-link modal-popup"></button>
        //             </div>
        //         </div>
        //     `);
        // });
        //#endregion Portfolios

        //#region Experiences
        $.each(data.experiences, (i, exp) => {
            $(".experiences").append(`
                <div class="resume-item wow fadeInLeft" data-wow-delay=".4s">
                    <div class="time">${exp.duration}</div>
                        <h3 class="resume-title">${exp.profession}</h3>
                    <div class="institute">${exp.company}</div>
                </div>
            `)
        })
        //#endregion Experiences

        //#region Education
        $.each(data.education, (i, edu) => {
            $(".education").append(`
                <div class="resume-item wow fadeInLeft" data-wow-delay=".4s">
                    <div class="time">${edu.duration}</div>
                        <h3 class="resume-title">${edu.degree}</h3>
                    <div class="institute">${edu.institute}</div>
                </div>
            `)
        })
        //#endregion Education


        //#region Skills
        $.each(data.skills, (i, s) => {
            $(`.skills-widget`).append(`
              <div class="skill-item wow fadeInUp" data-wow-delay=".3s">
                <div class="skill-inner">
                    <div class="icon-box">
                        <img src="${s.imageUrl}" alt="${s.name}'s Icon">
                    </div>
                    <div class="number">${s.percentage}%</div>
                </div>
                <p>${s.name}</p>
              </div>
          `);
        });
        //#endregion Skills

        //#region Testimonials
        $.each(data.leftTestimonialsHoveringImages, (i, lt) => {
            $(".left_details").append(`
              <div class="det_image ${lt.class} wow fadeIn" data-wow-duration="1s" data-img-url="${lt.imageUrl}"></div>
              <span class="circle ${lt.colorOrShape} animPulse"></span>
          `);
        });

        $.each(data.testimonials, (i, t) => {
            $(".testimonials").append(`
              <li>
                  <div class="icon">
                      <img class="svg" src="./assets/img/svg/testimonials/quote.svg" alt="" />
                  </div>
                  <div class="text">
                      <p>${t.review}</p>
                  </div>
                  <div class="short">
                      <div class="image">
                          <div class="main" data-img-url="${t.imageUrl}"></div>
                      </div>
                      <div class="detail">
                          <h3>${t.name}</h3>
                          <span>${t.from}</span>
                      </div>
                  </div>
              </li>
          `);
        });

        $.each(data.rightTestimonialsHoveringImages, (i, rt) => {
            $(".right_details").append(`
              <div class="det_image ${rt.class} wow fadeIn" data-wow-duration="1s" data-img-url="${rt.imageUrl}"></div>
              <span class="circle ${rt.colorOrShape} animPulse"></span>
          `);
        });
        //#endregion Testimonials

        //#region Contact
        $(".contact_inner .left ul").append(`
          <li>
              <div class="list_inner">
                  <div class="icon orangeBackground">
                      <i class="icon-location orangeText"></i>
                  </div>
                  <div class="short">
                      <h3>Address</h3>
                      <span>${data.basicInfo.longAddress}</span>
                  </div>
              </div>
          </li>
          <li>
              <div class="list_inner">
                  <div class="icon greenBackground">
                      <i class="icon-mail-1 greenText"></i>
                  </div>
                  <div class="short">
                      <h3>Email</h3>
                      <span><a href="mailto:${data.basicInfo.email}">${data.basicInfo.email}</a></span>
                  </div>
              </div>
          </li>
          <li>
              <div class="list_inner">
                  <div class="icon purpleBackground">
                      <i class="icon-phone purpleText"></i>
                  </div>
                  <div class="short">
                      <h3>Phone</h3>
                      <span>${data.basicInfo.mobile}</span>
                  </div>
              </div>
          </li>
  `);
        //#endregion Contact
    });
})();
