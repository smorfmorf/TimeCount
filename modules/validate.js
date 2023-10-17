const phone = document.querySelector('#reservation__phone')

const telMaks = new Inputmask('+7 (999)-999-99-99')

telMaks.mask(phone)


const validate = new JustValidate('.reservation__form')

validate
.addField('.reservation__input_name', [
    {
        rule:'required',
        errorMessage:'Заполнить имя'
    },
])
.addField('#reservation__phone', [
    {
        rule:'required',
        errorMessage:'Укажите телефон'
    },
    {
        validator(value){
            const tel = phone.inputmask.unmaskedvalue()
            console.log('tel: ', tel);
            return !!(Number(tel) && tel.length === 10)
        },
        errorMessage:'неверный телефон'
    }
])


new Swiper('.swiper', {
    slidesPerView:2,
    loop: true,
    
    autoplay:{
        delay:3000
    },

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.album__right',
      prevEl: '.album__left',
    },

    mousewheel:true,
 
  });