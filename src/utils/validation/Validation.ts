import * as yup from 'yup';

export const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Z][a-z]*$/, 'Name should starts from uppercase letter')
      .required('This field is required'),
    age: yup
      .number()
      .positive('Age should be greater than zero')
      .integer()
      .required('This field is required'),
    email: yup
      .string()
      .email(
        'Email address must be properly formatted (e.g., user@example.com) and should not contain whitespaces.',
      )
      .required('This field is required'),
    password: yup
      .string()
      .required('This field is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{4,25}$/,
        'Password must contain at least one uppercase and one lowercase letter, one digit and one special character.',
      ),
    confirmed_password: yup
      .string()
      .required('This field is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
    gender: yup.string().required('This field is required'),
    terms: yup
      .bool()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('This field is required'),
    image: yup
      .mixed<FileList>()
      .required('You need to provide a file')
      .test('format', 'Only png jpeg formats are accepted', (list) => {
        return (
          list.length > 0 &&
          (list[0].type === 'image/jpeg' || list[0].type === 'image/png')
        );
      })
      .test('fileSize', 'The file is too large', (list) => {
        return list.length > 0 && list[0].size <= 200000000;
      }),
    country: yup.string().required('This field is required'),
  })
  .required();
