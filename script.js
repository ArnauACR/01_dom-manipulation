window.document.addEventListener('DOMContentLoaded', () => {

    //1
    const mainTitle = window.document.getElementById('mainTitle');
    console.log(mainTitle);
  
    //2
    const paragraphs = window.document.getElementsByClassName('paragraph');
    paragraphs[1].textContent = "This paragraph has been changed.";
  
    //3
    const firstListItem = window.document.querySelector('li');
    firstListItem.style.color = 'red';
  
    //4
    const firstParagraph = paragraphs[0];
    firstParagraph.classList.add('highlight');
    setTimeout(() => {
      firstParagraph.classList.remove('highlight');
    }, 3000);
  
    //5
    const newListItem = window.document.createElement('li');
    newListItem.textContent = 'Item 4';
    window.document.getElementById('list').appendChild(newListItem);
  
    //6
    const list = window.document.getElementById('list');
    list.removeChild(list.lastElementChild);
  
    //7
    const actionButton = window.document.getElementById('actionButton');
    actionButton.addEventListener('click', () => {
      alert('Button clicked!');
    });
  
    //8
    const inputField = window.document.getElementById('inputField');
    const resultDiv = window.document.getElementById('result');
    inputField.addEventListener('input', (event) => {
      resultDiv.textContent = event.target.value;
    });
  
    //9
    const contentDiv = window.window.document.getElementById('content');
    actionButton.addEventListener('click', () => {
      contentDiv.style.display = contentDiv.style.display === 'none' ? 'block' : 'none';
    });

    //10
    inputField.placeholder = 'Enter your name';
  
  });
  
