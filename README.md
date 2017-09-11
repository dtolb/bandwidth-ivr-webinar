<div align="center">

# Bandwidth IVR Webinar Starter

<img src="https://s3.amazonaws.com/bwdemos/BW_Voice.png"/>
Basic IVR Flow for use with Bandwidth APIs
</div>

## IVR Webinar Pre-reqs

* [NodeJS v8+](https://nodejs.org/en/download/current/)
* [Bandwidth Voice and Messaging APIs Account](https://catapult.inetwork.com/portal/signup)
* [Ngrok](https://ngrok.com/)
* [Git](https://git-scm.com/)

## What we're going to cover

1. [Ordering a Phone Number](http://dev.bandwidth.com/howto/buytn.html)
2. [Setting up an application](http://dev.bandwidth.com/howto/incomingCallandMessaging.html)
3. Speaking to the caller with [BXML `SpeakSentence`](http://dev.bandwidth.com/ap-docs/bxml/verbs/speakSentence.html)
4. Request the caller to press a digit with [BXML `Gather`](http://dev.bandwidth.com/ap-docs/bxml/verbs/gather.html)
5. Forwarding the caller to their choice with [BXML `Transfer`](http://dev.bandwidth.com/ap-docs/bxml/verbs/transfer.html)

## Get Ready!

After installing pre-reqs

### Clone this repo then navigate to that folder

```bash
git clone https://github.com/dtolb/ivr-webinar.git
```

```bash
cd ivr-webinar
```

### Install Dependencies

```bash
npm i
```

### Launch the server

```bash
npm start
```

### Launch ngrok

```bash
./ngrok http 3000
```

### BXML Snips

#### Gather

Bandwidth uses a [gather](http://dev.bandwidth.com/ap-docs/bxml/verbs/gather.html) to ask the user to press a digit.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Gather requestUrl="http://your-server.com/gather-response" maxDigits="1">
        <SpeakSentence gender="female" locale="en_US" voice="susan">Hello, please press 1 for pizza and 2 for burgers</SpeakSentence>
    </Gather>
</Response>
```

#### Multi-Transfer

Bandwidth uses a [transfer](http://dev.bandwidth.com/ap-docs/bxml/verbs/transfer.html) to _transfer_ calls to another number.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="female" locale="en_US" voice="susan">
        Transferring you to Pizza!
    </SpeakSentence>
    <Transfer>
        <PhoneNumber>+15552223333</PhoneNumber>
        <PhoneNumber>+15552224444</PhoneNumber>
        <PhoneNumber>+15552226666</PhoneNumber>
    </Transfer>
</Response>
```

#### Single Transfer

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="female" locale="en_US" voice="susan">
        Transferring you to Bad Daddys!
    </SpeakSentence>
    <Transfer>
        <PhoneNumber>+15552227777</PhoneNumber>
    </Transfer>
</Response>
```

#### Speak Sentence

Bandwidth uses [SpeakSentence](http://dev.bandwidth.com/ap-docs/bxml/verbs/speakSentence.html) to play speak to the call, and [Hangup](http://dev.bandwidth.com/ap-docs/bxml/verbs/hangup.html) to end the call

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="female" locale="en_US" voice="susan">
        I'm sorry, I didn't understand your choice. Please callback and try again.
    </SpeakSentence>
<Hangup/>
</Response>
```


