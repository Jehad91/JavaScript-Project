var tweets = [];
document.getElementById("tweet-submit").addEventListener("click", createTweet);

function createTweet() {
    if(document.getElementById('username').value == ""){
        return;
    }
    //insert tweet container
    var tweet_container = document.createElement('div');
    tweet_container.className = 'tweet_container';
    document.getElementById("newsfeed").prepend(tweet_container);

    // insert username
    var user_name = document.createElement('h4');
    user_name.className = 'username_h';
    tweet_container.prepend(user_name);
    var user_name_text = document.createTextNode(document.getElementById('username').value);
    user_name.appendChild(user_name_text);
    // insert tweet
    var tweet_paraghraph = document.createElement('p');
    tweet_paraghraph.className = 'tweet_paraghraph';
    tweet_container.appendChild(tweet_paraghraph);
    var tweet_content = document.createTextNode(document.getElementById('tweet').value);
    tweet_paraghraph.appendChild(tweet_content);

    // insert like and retweet buttons
    var actions_buttons = document.createElement('ul');
    tweet_container.appendChild(actions_buttons);
    actions_buttons.className = "actions_buttons";
    // like button
    var like_button = document.createElement('li');
    actions_buttons.appendChild(like_button);
    like_button.className = "buttons like_button";
    var like_icon = document.createElement('i');
    like_button.appendChild(like_icon);
    like_icon.className = "far fa-heart like_btn";

    // retweet button
    var retweet_button = document.createElement('li');
    actions_buttons.appendChild(retweet_button);
    retweet_button.className = "buttons retweet_button";
    var retweet_icon = document.createElement('i');
    retweet_button.appendChild(retweet_icon);
    retweet_icon.className = "fas fa-retweet retweet_btn";

    // reset username and tweet
    document.getElementById('username').value = "";
    document.getElementById('tweet').value = "";

    // Change Color when click on like button
    document.querySelector(".like_btn").onclick = function changeColor() {
        this.style.color = 'red';
        this.closest('.tweet_container').children[1].style.color = '#4f4cffe6';
    }

    // Repeat Tweet when click on retweet button
    document.querySelector(".retweet_btn").onclick = function repeatTweet() {
        this.style.color = 'blue';
        var cloneTweet = this.closest('.tweet_container').cloneNode(true);
        document.getElementById("newsfeed").prepend(cloneTweet);
        var cloneTweet2 = this.closest('.tweet_container').cloneNode(true);
        document.getElementById("newsfeed").prepend(cloneTweet2);
    }
    
    // Store Data in Javascripts
    var usernames = document.querySelector('.username_h').innerText;
    var tweeet = document.querySelector('.tweet_paraghraph').innerText;

        tweets.push({
        author: usernames,
        tweet: tweeet,
    })
    console.log(tweets);
}