module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("WASABI_ACCESS_KEY"),
        secretAccessKey: env("WASABI_SECRET_KEY"),
        region: env("WASABI_REGION"),
        params: {
          ACL: env("WASABI_ACL", "public-read"),
          Bucket: env("WASABI_BUCKET"),
          Key: env("WASABI_BUCKET_KEY"),
        },
        endpoint: env("WASABI_END_POINT"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: "aws-s3",
//       providerOptions: {
//         accessKeyId: env("WASABI_ACCESS_KEY"),
//         secretAccessKey: env("WASABI_SECRET_KEY"),
//         region: env("WASABI_REGION"),
//         params: {
//           ACL: env("WASABI_ACL", "public-read"),
//           Bucket: env("WASABI_BUCKET"),
//         },
//         endpoint: env("WASABI_END_POINT"),
//       },
//       actionOptions: {
//         upload: {
//           getKey: (file) => `test/${file.hash}${file.ext}`,
//         },
//         uploadStream: {
//           getKey: (file) => `test/${file.hash}${file.ext}`,
//         },
//         delete: {},
//       },
//     },
//   },
// });
// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: "aws-s3",
//       providerOptions: {
//         accessKeyId: env("WASABI_ACCESS_KEY"),
//         secretAccessKey: env("WASABI_SECRET_KEY"),
//         region: env("WASABI_REGION"),
//         params: {
//           ACL: env("WASABI_ACL", "public-read"),
//           Bucket: env("WASABI_BUCKET"),
//         },
//         endpoint: env("WASABI_END_POINT"),
//       },
//       actionOptions: {
//         upload: {
//           // Add this to specify the folder
//           getKey: (file) => `/test/${file.hash}${file.ext}`,
//         },
//         uploadStream: {
//           // Add this to specify the folder
//           getKey: (file) => `/test/${file.hash}${file.ext}`,
//         },
//         delete: {},
//       },
//     },
//   },
// });