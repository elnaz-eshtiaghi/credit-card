let _card = document.getElementsByClassName('card')[0]
        let _front = document.getElementsByClassName('front')[0]
        let _back = document.getElementsByClassName('back')[0]
        _back.style.transform = 'scalex(-1)'

        // .....turn.....
        function front() {
            _card.style.transform = 'translate(-50%, -50%) rotatey(180deg)'
            setTimeout(() => {
                _front.style.opacity = 0
            }, 200)
        }
        function back() {
            _card.style.transform = 'translate(-50%, -50%) rotatey(0deg)'
            _front.style.opacity = 1
        }
        _card.addEventListener('mouseenter', (e) => {
            front()

        })
        _card.addEventListener('mouseleave', (e) => {
            back()
        })




        let _inp1 = document.querySelectorAll('#_input1>input')
        let _inp2 = document.querySelectorAll('#_input2>input')
        let _inf1 = document.querySelectorAll('.inf1>div')
        let _inf2 = document.querySelectorAll('.information span')
        let _sel = document.querySelectorAll('select')
        let _inp3 = document.querySelectorAll('#_input4>input')
        let _ccv = document.getElementsByClassName('_ccv')[0]

        // .....button.....

        document.getElementsByTagName('button')[0].addEventListener('click', () => {
            _inp2[0].value = ''
            _inf2[0].innerHTML = ''
            _inp3[0].value = ''
            _ccv.innerHTML = ''
            _inp1.forEach((val) => {
                val.value = ''
            })
            
            _inf1.forEach((val)=>{
                val.innerHTML = ''
            })
            _sel.forEach((val) => {
                val.value = ''
            })
            _inf2.forEach((val)=>{
                val.innerHTML = ''
            })

        })

        // .....input.....

        _inp1.forEach((val, i) => {
            val.addEventListener('input', (e) => {
                let v = e.target.value
                back()

                //    .....write-condition.....

                if ((v.search(/[a-z]/)) >= 0 || v.search(/[ا-ی]/) >= 0) {
                    v = v.slice(0, v.length - 1)

                }
                else {

                    // .....length-condition.....

                    _inf1[i].innerHTML = v
                    if ((v.length) == 4) {
                        e.target.nextElementSibling.focus()

                    }
                    else if ((v.length) > 3) {
                        v = v.slice(0, v.length - 1)
                        e.target.value = v
                    }
                    _inf1[i].innerHTML = v

                }
            })
        })
        _inp2[0].addEventListener('keyup', (e) => {
            let v = e.target.value
            back()

            if ((v.search(/[1-9]/)) >= 0) {
                v = v.slice(0, v.length - 1)
                e.target.value = v
            }
            else {
                _inf2[0].innerHTML = e.target.value
            }

        })
        _inp3[0].addEventListener('keyup', (e) => {
            front()
            let v = e.target.value
            console.log('v')
            if (v.search(/[a-z]/) >= 0 || v.search(/[ا-ی]/) >= 0) {
                v = v.slice(0, v.length - 1)
                e.target.value = v

            }
            _ccv.innerHTML = e.target.value
            _ccv.style.textShadow = 'none'

        })
        _sel.forEach((val, i) => {
            val.addEventListener('change', (e) => {
                back()

                let v = e.target.value
                _inf2[i + 1].innerHTML = v

            })
        })