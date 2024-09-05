// JavaScript to handle comment submission
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitComment').addEventListener('click', function() {
      var commentInput = document.getElementById('commentInput');
      var commentsSection = document.getElementById('commentsSection');
      var commentText = commentInput.value.trim();
  
      // Check if the comment is not empty
      if (commentText) {
        // Create a new div to hold the comment
        var commentDiv = document.createElement('div');
        commentDiv.className = 'card mt-2';
        commentDiv.innerHTML = `
          <div class="card-body">
            <p class="card-text">${commentText}</p>
          </div>
        `;
  
        // Append the comment to the comments section
        commentsSection.appendChild(commentDiv);
  
        // Clear the textarea after submission
        commentInput.value = '';
      } else {
        alert('Please enter a comment before submitting.');
      }
    });
  });
  