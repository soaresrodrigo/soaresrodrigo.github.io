// Menu mobile

const btnMobile = document.querySelector('.btn-menu');

function toggleMenu() {
    const menuList = document.getElementById('menuList');
    menuList.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);


// Show skills header
const skills = document.querySelector('.section-header .skills');
const stacks = document.querySelectorAll('.stacks li');
const images = document.querySelectorAll('.section-header .skills li img');


Array.prototype.forEach.call(stacks, (element) => {
    const attr = element.getAttribute('id');
    element.addEventListener('mouseover', () => showSkills(attr));
    element.addEventListener('mouseout', () => showSkills(attr, false));
});

function activeStackFromSkill(skill) {
    const category = skill.dataset.skillCategory;
        const categories = category.split(', ');

        categories.forEach(cat => {
            const stack = document.getElementById(cat);
            stack.classList.toggle('active');
        });
}

Array.prototype.forEach.call(images, (img) => {
    img.addEventListener('mouseover', () => activeStackFromSkill(img));
    img.addEventListener('mouseout', () => activeStackFromSkill(img));
});


function showSkills(stack, show = true) {
    Array.prototype.forEach.call(images, (skill) => {
        const category = skill.dataset.skillCategory;
        const categories = category.split(', ');

        skill.classList.remove('active');

        if (show && categories.includes(stack)) {
            skill.classList.add('active');
            skills.classList.add('active');
        }

        if (!show) {
            skills.classList.remove('active');
        }

    });
}