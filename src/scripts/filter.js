document.querySelectorAll('.filter-input').forEach(input => {
    input.addEventListener('change', function() {
        const wrapper = this.closest('.filter__items-wrapper');
        const span = wrapper.querySelector('span');
        if (this.checked) {
            wrapper.style.background = "center / contain no-repeat url('../../assets/images/svg/yellow-button.svg')";
        } else {
            wrapper.style.backgroundImage = "url('../../assets/images/svg/button-gray.svg')";
        }
    });
});