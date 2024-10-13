document.addEventListener('DOMContentLoaded', () => {

    //1
    const mainTitle = document.getElementById('mainTitle');
    console.log(mainTitle);
  
    //2
    const paragraphs = document.getElementsByClassName('paragraph');
    paragraphs[1].textContent = "This paragraph has been changed.";
  
    //3
    const firstListItem = document.querySelector('li');
    firstListItem.style.color = 'red';
  
    //4
    const firstParagraph = paragraphs[0];
    firstParagraph.classList.add('highlight');
    setTimeout(() => {
      firstParagraph.classList.remove('highlight');
    }, 3000);
  
    //5
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Item 4';
    document.getElementById('list').appendChild(newListItem);
  
    //6
    const list = document.getElementById('list');
    list.removeChild(list.lastElementChild);
  
    //7
    const actionButton = document.getElementById('actionButton');
    actionButton.addEventListener('click', () => {
      alert('Button clicked!');
    });
  
    //8
    const inputField = document.getElementById('inputField');
    const resultDiv = document.getElementById('result');
    inputField.addEventListener('input', (event) => {
      resultDiv.textContent = event.target.value;
    });
  
    //9
    const contentDiv = document.getElementById('content');
    actionButton.addEventListener('click', () => {
      contentDiv.style.display = contentDiv.style.display === 'none' ? 'block' : 'none';
    });

    //10
    inputField.placeholder = 'Enter your name';
  
  });
  
