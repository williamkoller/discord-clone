import React, { useRef, useEffect } from 'react'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>
  useEffect(() => {
    const div = messageRef.current
    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messageRef])

  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content="Hoje é meu aniversário"
        />

        <ChannelMessage
          author="William Koller"
          date="21/06/2020"
          content={
            <>
              <Mention>@William Koller</Mention>, me carrega no LOL e Cs de
              novo, por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
