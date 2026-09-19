// Step 1: Interactive Like Button Toggle
const likeBtn = document.querySelector('#like-btn');
const likeIcon = document.querySelector('#like-icon');
const likeText = document.querySelector('#like-text');
const profileCard = document.querySelector('#profile-card');

let isLiked = false;

likeBtn.addEventListener('click', () => {
  isLiked = !isLiked;

  if (isLiked) {
    likeIcon.textContent = '❤️';
    likeText.textContent = 'Liked';
    likeBtn.classList.remove('bg-gray-200', 'text-gray-800');
    likeBtn.classList.add('bg-pink-100', 'text-pink-600');
    profileCard.classList.add('card-liked');
  } else {
    likeIcon.textContent = '🤍';
    likeText.textContent = 'Like';
    likeBtn.classList.remove('bg-pink-100', 'text-pink-600');
    likeBtn.classList.add('bg-gray-200', 'text-gray-800');
    profileCard.classList.remove('card-liked');
  }
});