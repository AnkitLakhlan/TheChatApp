class ChatUI {
  constructor(list){
    this.list = list;
  }
  clear(){
    this.list.innerHTML = '';
  }
  render(data){
    // Make sure dateFns is defined before using it
    let when = 'just now';
    try {
      when = dateFns.distanceInWordsToNow(
        data.created_at.toDate(),
        { addSuffix: true }
      );
    } catch (error) {
      console.error('Error formatting date:', error);
    }

    const html = `
      <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</span>
      </li>
    `;
    this.list.innerHTML += html;
  }
}