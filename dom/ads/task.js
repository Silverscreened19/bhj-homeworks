const rotator_case = Array.from(document.querySelectorAll('.rotator__case'));

setInterval(() => {
    let index = rotator_case.findIndex(el => el.classList.contains('rotator__case_active'));
    rotator_case[index].classList.remove('rotator__case_active');
    index++;
    if (index >= rotator_case.length) {
        index = 0;
        rotator_case[index].classList.add('rotator__case_active');
        rotator_case[index].style.color = rotator_case[index].dataset.color;

    } else {
        rotator_case[index].classList.add('rotator__case_active');
        rotator_case[index].style.color = rotator_case[index].dataset.color;
    }
}, 1000)
