import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import {
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import React, { useState } from 'react';


export default function Contact() {
  // 名前
  const [name, setName] = useState('')
  const handleNameChange = (e: any) => setName(e.target.value)
  const isErrorName = (name !== '' && name.length > 100) ? true : false
  // email
  const [email, setEmail] = useState('')
  const handleEmailChange = (e: any) => setEmail(e.target.value)
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isErrorEmail = (email !== '' && !email.match(isValidEmail)) ? true : false
  // 問合せ内容
  const [message, setMessage] = useState('')
  const handleMessageChange = (e: any) => setMessage(e.target.value)
  const isErrorMessage = (message !== '' && message.length > 500) ? true : false
  // 送信可能か
  const canSubmit = () => (
      (name !== '' && !isErrorName)
      && (email && !isErrorEmail)
      && (message !== '' && !isErrorMessage)
    ) ? true : false
  // toast
  const toast = useToast()
  // 送信
  const [loading, setLoading] = useState(false)
  const onclickSendMail = () => {
    // ボタンをloading状態にする
    setLoading(true)

    const emailjsPublicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
    const emailjsServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const emailjsTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID_CUSTOMER;
    const emailjsTemplateIdResult = process.env.REACT_APP_EMAIL_TEMPLATE_ID_RESULT;

    // emailjsのテンプレートに渡すパラメータを宣言
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // ServiceId,Template_ID,テンプレートに渡すパラメータを引数にemailjsを呼び出し
    emailjs.send(emailjsServiceId!, emailjsTemplateId!, templateParams, emailjsPublicKey)
    .then(function(response: any) {
      // 送信成功
      const templateParams_result = {
        name: name,
        email: email,
        message: message,
        result: '成功'
      };
      emailjs.send(emailjsServiceId!, emailjsTemplateIdResult!, templateParams_result, emailjsPublicKey)
      toast({
        title: '送信完了',
        description: "お問合せありがとうございます。",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setLoading(false)
      console.log('SUCCESS!', response.status, response.text);
    }, function(error: any) {
      // 送信失敗
      console.log('FAILED...', error);
      const templateParams_result = {
        name: name,
        email: email,
        message: message,
        result: '失敗'
      };
      emailjs.send(emailjsServiceId!, emailjsTemplateIdResult!, templateParams_result, emailjsPublicKey)
      toast({
        title: '送信エラー',
        description: "お問合せの送信に失敗しました。",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      setLoading(false)
    });
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden" id='contact'>
      <Flex>
        <Box
          borderRadius="lg"
          m={{ sm: 4, md: 4, lg: 8 }}
          p={{ sm: 5, md: 5, lg: 8 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>お問い合せ</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                    右の内容を入力し送信を押下してください。
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        fontWeight="normal"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        manacorp2015@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        fontWeight="normal"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        東京都江東区東陽5-31-21　
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F" width="500px">
                    <VStack spacing={5}>

                      <FormControl id="name" isInvalid={isErrorName}>
                        <FormLabel>会社名+お名前</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" value={name} onChange={handleNameChange} />
                          <br></br>
                          {!isErrorName ? (
                            <FormHelperText></FormHelperText>
                          ) : (
                            <FormErrorMessage>100字以内で会社名+お名前を入力してください。</FormErrorMessage>
                          )}
                        </InputGroup>
                      </FormControl>

                      <FormControl id="email" isInvalid={isErrorEmail}>
                        <FormLabel>メールアドレス</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="email" size="md"  value={email} onChange={handleEmailChange} />
                          <br></br>
                          {!isErrorEmail ? (
                            <FormHelperText></FormHelperText>
                          ) : (
                            <FormErrorMessage>メールアドレスを正しく入力してください。</FormErrorMessage>
                          )}
                        </InputGroup>
                      </FormControl>

                      <FormControl id="message" isInvalid={isErrorMessage}>
                        <FormLabel>お問合せ内容</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                        <Textarea
                          borderColor="gray.300"
                          value={message}
                          onChange={handleMessageChange}
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                        <br></br><br></br><br></br>
                        {!isErrorMessage ? (
                          <FormHelperText></FormHelperText>
                        ) : (
                          <FormErrorMessage>500字以内でお問合せ内容を入力してください。</FormErrorMessage>
                        )}
                        </InputGroup>
                      </FormControl>

                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          isLoading={loading}
                          disabled={!canSubmit()}
                          onClick={onclickSendMail}
                          _hover={{bg:"#0d9eff"}}>
                          　　　送信　　　
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}