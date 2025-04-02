import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetter from "../newsletter/NewsLetter";

function MailChimpForm() {
  const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${
    import.meta.env.VITE_MAILCHIMP_U
  }&id=${import.meta.env.VITE_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <NewsLetter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
}

export default MailChimpForm;
