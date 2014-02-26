'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click(handleLikeClick)
}

function handleLikeClick(e) {
	console.log('clicked the button');
	ga("send", "event", "like", "click");
}

