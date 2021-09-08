const teachers = [
  {
    img: '../imgs/teacher1.png',
    name: 'Albert Noah',
    position: 'Professional UI & UX Designer',
    description: 'He is one of the most professional UI & UX designers in the world. He worked in google',
  },
  {
    img: '../imgs/teacher2.png',
    name: 'Mohamed Omar',
    position: 'Professional Front-End Developer',
    description: 'He is one of the most professional front end developers in the world. He worked in google',
  },
  {
    img: '../imgs/teacher3.png',
    name: 'Sara Esmail',
    position: 'Professional Back-End Developer',
    description: 'He is one of the most professional back end developers in the world. He worked in amazon',
  },
  {
    img: '../imgs/teacher4.png',
    name: 'Jain Noah',
    position: 'Professional Full-Stack Developer',
    description: 'She is one of the most professional full stach developers in the world. He worked in facebook',
  },
  {
    img: '../imgs/teacher5.png',
    name: 'Maria Mosa',
    position: 'Professional Full-Stack Developer',
    description: 'she is one of the most professional full stach developers in the world. He worked in facebook',
  },
  {
    img: '../imgs/teacher6.png',
    name: 'Ahmed Omar',
    position: 'Professional Full-Stack Developer',
    description: 'He is one of the most professional ffull stach developers in the world. He worked in google',
  },
];

const teachersContainer = document.getElementById('teachers');

teachers.map((teacher) => {
  const teacherContainer = document.createElement('div');
  teacherContainer.className = 'teacher col-lg-6 col-12 d-md-flex';
  // Img
  const teacherImage = document.createElement('img');
  teacherImage.src = teacher.img;
  teacherContainer.appendChild(teacherImage);
  /* Content */
  const content = document.createElement('div');
  content.className = 'content text-md-start ms-3';
  teacherContainer.appendChild(content);
  // Name
  const teacherName = document.createElement('h3');
  teacherName.className = 'name h5 mt-3';
  teacherName.textContent = teacher.name;
  content.appendChild(teacherName);
  // Position
  const teacherPosition = document.createElement('h4');
  teacherPosition.classPosition = 'position';
  teacherPosition.textContent = teacher.position;
  content.appendChild(teacherPosition);
  // description
  const teacherDescription = document.createElement('p');
  teacherDescription.classDescription = 'description';
  teacherDescription.textContent = teacher.description;
  content.appendChild(teacherDescription);
  // append to html
  return teachersContainer.appendChild(teacherContainer);
});