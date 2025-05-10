document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.selection button');
    const courses = document.querySelectorAll('.courses span');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonId = this.id;

            courses.forEach(course => {
                course.style.backgroundColor = '#E6EDEF';
            });

            if (buttonId === 'all') {
                courses.forEach(course => {
                    course.style.backgroundColor = '#66301D';
                });
            } else if (buttonId === 'cse') {
                document.querySelector('#cse110').style.backgroundColor = '#66301D';
                document.querySelector('#cse111').style.backgroundColor = '#66301D';
                document.querySelector('#cse210').style.backgroundColor = '#66301D';
            } else if (buttonId === 'wdd') {
                document.querySelector('#wdd130').style.backgroundColor = '#66301D';
                document.querySelector('#wdd131').style.backgroundColor = '#66301D';
                document.querySelector('#wdd231').style.backgroundColor = '#66301D';
            }
        });
    });
});