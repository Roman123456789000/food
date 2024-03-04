/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/******/(() => {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/"./src/js/modules/calc.js": (
    /*!********************************!*\
      !*** ./src/js/modules/calc.js ***!
      \********************************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_333__) => {
      __nested_webpack_require_333__.r(__nested_webpack_exports__);
      /* harmony export */
      __nested_webpack_require_333__.d(__nested_webpack_exports__, {
        /* harmony export */"default": () => __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */
      });
      function calc() {
        //calc

        const result = document.querySelector('.calculating__result span');
        let sex, height, weight, age, ratio;
        if (localStorage.getItem('sex')) {
          sex = localStorage.getItem('sex');
        } else {
          sex = 'female';
          localStorage.setItem('sex', 'female');
        }
        if (localStorage.getItem('ratio')) {
          ratio = localStorage.getItem('ratio');
        } else {
          ratio = 1.375;
          localStorage.setItem('ratio', 1.375);
        }
        function initLocalSetting(selector, activeClass) {
          const element = document.querySelectorAll(selector);
          element.forEach(item => {
            item.classList.remove(activeClass);
            if (item.getAttribute('id') === localStorage.getItem('sex')) {
              item.classList.add(activeClass);
            }
            if (item.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
              item.classList.add(activeClass);
            }
          });
        }
        ;
        initLocalSetting('#gender div', 'calculating__choose-item_active');
        initLocalSetting('.calculating__choose_big div', 'calculating__choose-item_active');
        function calcTotal() {
          if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;
          }
          if (sex === 'female') {
            result.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
          } else {
            result.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
          }
        }
        ;
        calcTotal();
        function getStaticInformation(selector, activeClass) {
          const element = document.querySelectorAll(selector);
          element.forEach(item => {
            item.addEventListener('click', e => {
              if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
              } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));
              }
              console.log(ratio, sex);
              element.forEach(item => {
                item.classList.remove(activeClass);
              });
              e.target.classList.add(activeClass);
              calcTotal();
            });
          });
        }
        ;
        getStaticInformation('#gender div', 'calculating__choose-item_active');
        getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
        function getDynamicInformation(selector) {
          const input = document.querySelector(selector);
          input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
              input.style.border = '1xp solid red';
            } else {
              input.style.border = 'none';
            }
            switch (input.getAttribute('id')) {
              case 'height':
                height = +input.value;
                break;
              case 'weight':
                weight = +input.value;
                break;
              case 'age':
                age = +input.value;
                break;
            }
            calcTotal();
          });
        }
        ;
        getDynamicInformation('#height');
        getDynamicInformation('#weight');
        getDynamicInformation('#age');
      }

      /* harmony default export */
      const __WEBPACK_DEFAULT_EXPORT__ = calc;

      /***/
    }),
    /***/"./src/js/modules/cards.js": (
    /*!*********************************!*\
      !*** ./src/js/modules/cards.js ***!
      \*********************************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_4534__) => {
      __nested_webpack_require_4534__.r(__nested_webpack_exports__);
      /* harmony export */
      __nested_webpack_require_4534__.d(__nested_webpack_exports__, {
        /* harmony export */"default": () => __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */
      });
      /* harmony import */
      var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4534__( /*! ../services/services */"./src/js/services/services.js");
      function cards() {
        // Используем классы для карточек
        class MenuCard {
          constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 39;
            this.changeToUAH();
          }
          changeToUAH() {
            this.price = this.price * this.transfer;
          }
          render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
              this.element = "menu__item";
              element.classList.add(this.element);
            } else {
              this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
          }
        }

        // getResourse('http://localhost:3000/menu')
        // .then(data => {
        //     data.forEach(({img, altimg, title, descr, price}) => {
        //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        //     });
        // });

        (0, _services_services__WEBPACK_IMPORTED_MODULE_0__.getResourse)('http://localhost:3000/menu').then(data => {
          data.data.forEach(({
            img,
            altimg,
            title,
            descr,
            price
          }) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
          });
        });
      }

      /* harmony default export */
      const __WEBPACK_DEFAULT_EXPORT__ = cards;

      /***/
    }),
    /***/"./src/js/modules/forms.js": (
    /*!*********************************!*\
      !*** ./src/js/modules/forms.js ***!
      \*********************************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_7477__) => {
      __nested_webpack_require_7477__.r(__nested_webpack_exports__);
      /* harmony export */
      __nested_webpack_require_7477__.d(__nested_webpack_exports__, {
        /* harmony export */"default": () => __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */
      });
      /* harmony import */
      var _modal__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_7477__( /*! ./modal */"./src/js/modules/modal.js");
      /* harmony import */
      var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_7477__( /*! ../services/services */"./src/js/services/services.js");
      function forms(formSelector, modalTimerId) {
        // Forms

        const forms = document.querySelectorAll(formSelector);
        const message = {
          loading: 'img/form/spinner.svg',
          success: 'Спасибо! Скоро мы с вами свяжемся',
          failure: 'Что-то пошло не так...'
        };
        forms.forEach(item => {
          bindPostData(item);
        });
        function bindPostData(form) {
          form.addEventListener('submit', e => {
            e.preventDefault();
            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            (0, _services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json).then(data => {
              console.log(data);
              showThanksModal(message.success);
              statusMessage.remove();
            }).catch(() => {
              showThanksModal(message.failure);
            }).finally(() => {
              form.reset();
            });
          });
        }
        function showThanksModal(message) {
          const prevModalDialog = document.querySelector('.modal__dialog');
          prevModalDialog.classList.add('hide');
          (0, _modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);
          const thanksModal = document.createElement('div');
          thanksModal.classList.add('modal__dialog');
          thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
          document.querySelector('.modal').append(thanksModal);
          setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            (0, _modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
          }, 4000);
        }
        fetch('http://localhost:3000/menu').then(data => data.json()).then(res => console.log(res));
      }

      /* harmony default export */
      const __WEBPACK_DEFAULT_EXPORT__ = forms;

      /***/
    }),
    /***/"./src/js/modules/modal.js": (
    /*!*********************************!*\
      !*** ./src/js/modules/modal.js ***!
      \*********************************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_10789__) => {
      __nested_webpack_require_10789__.r(__nested_webpack_exports__);
      /* harmony export */
      __nested_webpack_require_10789__.d(__nested_webpack_exports__, {
        /* harmony export */closeModal: () => ( /* binding */closeModal),
        /* harmony export */"default": () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */openModal: () => ( /* binding */openModal)
        /* harmony export */
      });
      function openModal(modalSelector, modalTimerId) {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        console.log(modalTimerId);
        if (modalTimerId) {
          clearInterval(modalTimerId);
        }
        ;
      }
      function closeModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
      function modal(triggerSelector, modalSelector, modalTimerId) {
        // Modal
        const modalTrigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const modalCloseBtn = document.querySelector('[data-close]');
        modalTrigger.forEach(btn => {
          btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
        });
        modalCloseBtn.addEventListener('click', () => closeModal(modalSelector));
        modal.addEventListener('click', e => {
          if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
          }
        });
        document.addEventListener('keydown', e => {
          if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
          }
        });
        function showModalByScroll() {
          if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
          }
        }
        window.addEventListener('scroll', showModalByScroll);
      }

      /* harmony default export */
      const __WEBPACK_DEFAULT_EXPORT__ = modal;

      /***/
    }),
    /***/"./src/js/modules/slides.js": (
    /*!**********************************!*\
      !*** ./src/js/modules/slides.js ***!
      \**********************************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_13396__) => {
      __nested_webpack_require_13396__.r(__nested_webpack_exports__);
      /* harmony export */
      __nested_webpack_require_13396__.d(__nested_webpack_exports__, {
        /* harmony export */"default": () => __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */
      });
      function slides({
        container,
        slide,
        nextArrow,
        prevArrow,
        totalCounter,
        currentCounter,
        wrapper,
        field
      }) {
        // Slides

        let offset = 0;
        let slideIndex = 1;
        const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          width = window.getComputedStyle(slidesWrapper).width,
          slidesField = document.querySelector(field);
        if (slides.length < 10) {
          total.textContent = `0${slides.length}`;
          current.textContent = `0${slideIndex}`;
        } else {
          total.textContent = slides.length;
          current.textContent = slideIndex;
        }
        slidesField.style.width = 100 * slides.length + "%";
        slidesField.style.display = "flex";
        slidesField.style.transition = "0.5s all";
        slidesWrapper.style.overflow = "hidden";
        slides.forEach(slide => {
          slide.style.width = width;
        });
        slider.style.position = 'relative';
        const indicators = document.createElement('ol'),
          dots = [];
        indicators.classList.add('carousel-indicators');
        indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
        slider.append(indicators);
        for (let i = 0; i < slides.length; i++) {
          const dot = document.createElement('li');
          dot.setAttribute('data-slide-to', i + 1);
          dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
          if (i === 0) {
            dot.style.opacity = 1;
          }
          indicators.append(dot);
          dots.push(dot);
        }
        function deleteNotDigits(str) {
          return +str.replace(/\D/g, '');
        }
        next.addEventListener("click", () => {
          if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
          } else {
            offset += deleteNotDigits(width);
          }
          slidesField.style.transform = `translateX(-${offset}px)`;
          if (slideIndex == slides.length) {
            slideIndex = 1;
          } else {
            slideIndex++;
          }
          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          } else {
            current.textContent = slideIndex;
          }
          dots.forEach(dot => dot.style.opacity = '.5');
          dots[slideIndex - 1].style.opacity = 1;
        });
        prev.addEventListener("click", () => {
          if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
          } else {
            offset -= deleteNotDigits(width);
          }
          slidesField.style.transform = `translateX(-${offset}px)`;
          if (slideIndex == 1) {
            slideIndex = slides.length;
          } else {
            slideIndex--;
          }
          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          } else {
            current.textContent = slideIndex;
          }
          dots.forEach(dot => dot.style.opacity = '.5');
          dots[slideIndex - 1].style.opacity = 1;
        });
        dots.forEach(dot => {
          dot.addEventListener('click', e => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            if (slides.length < 10) {
              current.textContent = `0${slideIndex}`;
            } else {
              current.textContent = slideIndex;
            }
            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
          });
        });
      }

      /* harmony default export */
      const __WEBPACK_DEFAULT_EXPORT__ = slides;

      /***/
    }),
    /***/"./src/js/modules/tabs.js": (
    /*!********************************!*\
      !*** ./src/js/modules/tabs.js ***!
      \********************************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_18705__) => {
      __nested_webpack_require_18705__.r(__nested_webpack_exports__);
      /* harmony export */
      __nested_webpack_require_18705__.d(__nested_webpack_exports__, {
        /* harmony export */"default": () => __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */
      });
      function tabs(tabsSelector, tabsContentSelector, tabsPerentSelector, activeClass) {
        // Tabs
        let tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsPerentSelector);
        function hideTabContent() {
          tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
          });
          tabs.forEach(item => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          tabsContent[i].classList.add('show', 'fade');
          tabsContent[i].classList.remove('hide');
          tabs[i].classList.add(activeClass);
        }
        hideTabContent();
        showTabContent();
        tabsParent.addEventListener('click', event => {
          const target = event.target;
          if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
              if (target == item) {
                hideTabContent();
                showTabContent(i);
              }
            });
          }
        });
      }

      /* harmony default export */
      const __WEBPACK_DEFAULT_EXPORT__ = tabs;

      /***/
    }),
    /***/"./src/js/modules/timer.js": (
    /*!*********************************!*\
      !*** ./src/js/modules/timer.js ***!
      \*********************************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_20530__) => {
      __nested_webpack_require_20530__.r(__nested_webpack_exports__);
      /* harmony export */
      __nested_webpack_require_20530__.d(__nested_webpack_exports__, {
        /* harmony export */"default": () => __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */
      });
      function timer(id, deadline) {
        function getTimeRemaining(endtime) {
          let days, hours, minutes, seconds;
          const t = Date.parse(endtime) - Date.parse(new Date());
          if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
          } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)), hours = Math.floor(t / (1000 * 60 * 60) % 24), minutes = Math.floor(t / 1000 / 60 % 60), seconds = Math.floor(t / 1000 % 60);
          }
          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
          };
        }
        function getZero(num) {
          if (num >= 0 && num < 10) {
            return `0${num}`;
          } else {
            return num;
          }
        }
        function setClock(selector, endtime) {
          const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
          updateClock();
          function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
              clearInterval(timeInterval);
            }
          }
        }
        setClock(id, deadline);
      }

      /* harmony default export */
      const __WEBPACK_DEFAULT_EXPORT__ = timer;

      /***/
    }),
    /***/"./src/js/services/services.js": (
    /*!*************************************!*\
      !*** ./src/js/services/services.js ***!
      \*************************************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_22852__) => {
      __nested_webpack_require_22852__.r(__nested_webpack_exports__);
      /* harmony export */
      __nested_webpack_require_22852__.d(__nested_webpack_exports__, {
        /* harmony export */getResourse: () => ( /* binding */getResourse),
        /* harmony export */postData: () => ( /* binding */postData)
        /* harmony export */
      });
      const postData = async (url, data) => {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: data
        });
        return await res.json();
      };
      async function getResourse(url) {
        let res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
      }

      /***/
    })

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_23937__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_23937__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/
  (() => {
    /******/ // define getter functions for harmony exports
    /******/__nested_webpack_require_23937__.d = (exports, definition) => {
      /******/for (var key in definition) {
        /******/if (__nested_webpack_require_23937__.o(definition, key) && !__nested_webpack_require_23937__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (() => {
    /******/__nested_webpack_require_23937__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  (() => {
    /******/ // define __esModule on exports
    /******/__nested_webpack_require_23937__.r = exports => {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __nested_webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**************************!*\
      !*** ./src/js/script.js ***!
      \**************************/
    __nested_webpack_require_23937__.r(__nested_webpack_exports__);
    /* harmony import */
    var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_23937__( /*! ./modules/tabs */"./src/js/modules/tabs.js");
    /* harmony import */
    var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_23937__( /*! ./modules/modal */"./src/js/modules/modal.js");
    /* harmony import */
    var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_23937__( /*! ./modules/timer */"./src/js/modules/timer.js");
    /* harmony import */
    var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_23937__( /*! ./modules/cards */"./src/js/modules/cards.js");
    /* harmony import */
    var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_23937__( /*! ./modules/calc */"./src/js/modules/calc.js");
    /* harmony import */
    var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_23937__( /*! ./modules/forms */"./src/js/modules/forms.js");
    /* harmony import */
    var _modules_slides__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_23937__( /*! ./modules/slides */"./src/js/modules/slides.js");
    window.addEventListener('DOMContentLoaded', () => {
      const modalTimerId = setTimeout(() => (0, _modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 50000);
      (0, _modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
      (0, _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
      (0, _modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer', '2024-04-25');
      (0, _modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
      (0, _modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
      (0, _modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])('form', modalTimerId);
      (0, _modules_slides__WEBPACK_IMPORTED_MODULE_6__["default"])({
        container: '.offer__slider',
        slide: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner"
      });
    });
  })();

  /******/
})();
/******/ })()
;
//# sourceMappingURL=script.js.map