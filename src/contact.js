function createContact() {
    // const contact = document.createElement('div');
    // contact.classList.add('contact');

    // const phoneNumber = document.createElement('p');
    // phoneNumber.textContent = '📞 123 456 789';

    // const address = document.createElement('p');
    // address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';

    // const iframe = document.createElement('iframe');

    // iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5524727946686!2d139.696496975788!3d35.68801997258499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd04b8f5abd%3A0x36ce84c14fe43b2a!2sMcDonald%26#39;s!5e0!3m2!1sen!2sus!4v1697061330365!5m2!1sen!2sus";
    // iframe.width = "600";
    // iframe.height = "450";
    // iframe.style.border = "0";
    // iframe.allowFullscreen = true;
    // iframe.loading = "lazy";
    // iframe.referrerPolicy = "no-referrer-when-downgrade";

    // contact.appendChild(phoneNumber);
    // contact.appendChild(address);
    // contact.appendChild(iframe);

    // return contact;


    // const content = document.querySelector(".content");

    const contact = document.createElement("div");
    contact.classList.add("contact");

    contact.innerHTML = '<p>📞123 456 789</p> <p>🏠 H2 Chome-6-7 Yoyogi, Shibuya City, Tokyo 151-0053, Japan</p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5524727946686!2d139.696496975788!3d35.68801997258499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd04b8f5abd%3A0x36ce84c14fe43b2a!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1697061330365!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    return contact;

}

function loadContact() {
    const main = document.querySelector('main')
    main.textContent = "";
    main.appendChild(createContact())
}

export default loadContact;