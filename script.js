const urduPoems = [
    "Mai kya kahu ke mujhe chain kyu nhi ata mai kya kru ke tujhe dekhne ki aadat hai ",
    "yuuñ tujhe dekh ke chauñk uThtī haiñ soī yādeñ jaise sannāTe meñ āvāz lagā de koī ",
    "mai bhi bht ajeeb hu itna ajeeb ke bs khud ko tabah kr lia aur malaal bhi nhi",
    "Woh aur hoga jo rishton mein faqat apni haalat sochta hoga Main to tera tha, maine to teri hi haalat sochi thi",
    "Tum takalluf ko bhi ikhlaas samajhte ho, 'faraaz' Dost hota nahi har haath milane wala",
    "Tumse milkar udaas rehta hoon, kya kahoon kis qadar tumhe chahta hoon",
"Main ab bhi tanha hoon, ab bhi udaas hoon, bas farq yeh hai, main ab tumhara nahi hoon",
"Mere dil ke armaan jalte rahe, tumhari yaadon mein hum palte rahe",
"Kuch iss qadar hum apne gham mein gum rahe, sab kuch tha par hum bas tumhare hi rahe",
"Tumhein bhoolna mumkin nahi hai ab, hum apne gham ko bhi tum ka naam diye baithe hain",
"Mohabbat ka junoon aisa tha, apni khudi ko tum pe qurbaan kar diya",
"Dil ka dard itna gehra hai, mohabbat bhi is dard ka silsila hai",
"Aaj bhi usi mod pe khada hoon, jahaan tumne keh kar chhoda tha",
"Humne jo dard apna samjha tha, tumhare liye woh bas ek qissa tha",
"Kitna ajeeb hai na yeh safar, tumhari yaadon mein hum raat bhar",
"Teri khamoshi ka gham hai mujhe, main ab bhi tumhara deewana hoon",
"Zindagi ke safar mein yunhi chale gaye, tum mile toh gum-e-hayaat kam ho gaye",
"Na kuch kaha na kuch suna, bas tumhare liye hum yunhi jiya",
"Kabhi socha tha tumhare baghair, ab bas yaadon ke hum humsafar hai",
"Mujh se khafa ho kar tum chale gaye, ab yaadon mein sirf aansu hain",
"Waqt guzarta raha aur hum chup rahe, tumhari yaadon mein bas yunhi jalte rahe",
"Tum mere dard ka ilaj ban jaate, magar tum khud hi mera dard ban gaye",
"Ab bhi tera naam lete hain hum, aur aansuon mein ghul jaate hain hum",
"Dil ke dard ko itna gehra paaya, tumhari yaadon mein har lamha roya",
"Na tum aaye, na yaadon ka silsila khatam hua, hum bas yunhi tanha reh gaye",
"Tere ishq mein jo hum ne kiya, woh humne bas apne liye nahi kiya",
"Zindagi ka gham itna gehra tha, mohabbat bhi ek afsana tha",
"Tere naam ka junoon ab bhi hai, bas farq yeh hai ke tum nahi ho",
"Na tum mil sake, na hum badal sake, zindagi ke is safar mein hum yunhi gum ho gaye",
"Jo tum keh gaye, hum yunhi sunte rahe, bas yaadon ka ek silsila tha",
"Tumse bichhad ke humne yeh jaana, ke dard ka asli maza tumhare bagair hai",
"Tumhare ishq mein itna roye, ab aansuon mein bas yaadon ka rang hai",
"Na tum badle, na hum badle, bas waqt ka silsila tha jo guzarta raha",
"Mohabbat ka junoon itna gehra tha, hum apni khudi ko bhool baithe",
"Teri yaadon mein hum yunhi gum hai, zindagi ka har pal bas tumhara hai"
];

const englishPoems = [
    "I wandered lonely as a cloud",
    "Shall I compare thee to a summer's day?",
    "The woods are lovely, dark and deep",
    "Hope is the thing with feathers",
    "Do not go gentle into that good night",
    "In the silence of the night, I hear the echoes of your love",
"Your absence is the loudest sound in my quiet world",
"I search for you in the words left unspoken",
"In every heartbeat, there's a memory of you",
"The rain reminds me of the tears I never cried",
"Love is the wound that time refuses to heal",
"You left, but your memories stayed to haunt me",
"In the ashes of my dreams, your name still burns",
"The more I run from your memory, the closer it gets",
"In the garden of my heart, you are the only flower",
"Every sunset reminds me of the colors of your smile",
"The shadows of your love linger in every corner",
"You were my song, now Im left with silence",
"Every tear holds a story of our beautiful past",
"In my dreams, you still dance in the moonlight",
"Your laughter is a melody I can never forget",
"Time passes, but my heart beats only for you",
"Every star in the sky is a memory of you",
"You were my home, now I'm lost in the world",
"In the pages of my heart, your name is written",
"The night whispers your name, and I listen",
"You were my truth, now I'm lost in the lies",
"Each moment without you feels like an eternity",
"The warmth of your embrace lingers in my soul",
"Your love was a book, and Im stuck on the last page",
"In the silence, I hear the echoes of your promises",
"Your smile was the sunrise that brightened my day",
"The fragrance of your love still lingers in the air",
"With every heartbeat, I relive our cherished moments",
"You were my dream, now you're just a memory",
];

// Function to display random poetry
function getRandomPoem(poems) {
    const randomIndex = Math.floor(Math.random() * poems.length);
    return poems[randomIndex];
}

document.getElementById("btn-urdu").addEventListener("click", function() {
    const poem = getRandomPoem(urduPoems);
    document.getElementById("poetry-display").innerHTML = `<p>${poem}</p>`;
});

document.getElementById("btn-english").addEventListener("click", function() {
    const poem = getRandomPoem(englishPoems);
    document.getElementById("poetry-display").innerHTML = `<p>${poem}</p>`;
});

