export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type ICertificateImage = {
  __typename?: 'CertificateImage';
  deleteAt: Scalars['DateTime'];
  id: Scalars['String'];
  mento: IMentoInfo;
  url: Scalars['String'];
};

export type IComments = {
  __typename?: 'Comments';
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  depth?: Maybe<Scalars['Int']>;
  group?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isPick?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['String']>;
  qtBoard: IQtBoard;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ICreateLectureProductInput = {
  classAppliedUser?: InputMaybe<Scalars['Int']>;
  classCategory: Scalars['String'];
  classDescription: Scalars['String'];
  classMaxUser: Scalars['Int'];
  classPrice: Scalars['Int'];
  classRunTime: Scalars['Int'];
  classTitle: Scalars['String'];
};

export type ICreateLectureRegistrationInput = {
  age: Scalars['Int'];
  phoneNumber: Scalars['String'];
  preQuestion?: InputMaybe<Scalars['String']>;
  selfIntroduction: Scalars['String'];
};

export type ICreateLectureReviewInput = {
  lectureProductId: Scalars['String'];
  reviewContents: Scalars['String'];
  starRating: Scalars['Float'];
};

export type IFollow = {
  __typename?: 'Follow';
  createdAt: Scalars['DateTime'];
  followee: IMentoInfo;
  follower: IUser;
  following: Scalars['Boolean'];
};

export enum IJob {
  Default = 'DEFAULT',
  Employeed = 'EMPLOYEED',
  Etc = 'ETC',
  Jobseeker = 'JOBSEEKER',
  OwnerFreelancer = 'OWNER_FREELANCER',
  SelfEmployeed = 'SELF_EMPLOYEED',
  Student = 'STUDENT',
  Youngapplicant = 'YOUNGAPPLICANT'
}

export type IJoinLectureAndProductCategory = {
  __typename?: 'JoinLectureAndProductCategory';
  id: Scalars['String'];
  linkedToLectureProduct: ILectureProduct;
  linkedToLectureProductCategory: ILectureProductCategory;
};

export type IJoinMentoAndProductCategory = {
  __typename?: 'JoinMentoAndProductCategory';
  category: ILectureProductCategory;
  deleteAt: Scalars['DateTime'];
  id: Scalars['String'];
  mento: IMentoInfo;
};

export type IJoinUserAndProductCategory = {
  __typename?: 'JoinUserAndProductCategory';
  id: Scalars['String'];
  linkedToLectureProductCategory: ILectureProductCategory;
  user: IUser;
};

export type ILectureImage = {
  __typename?: 'LectureImage';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  lecproduct: ILectureProduct;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type ILectureOrder = {
  __typename?: 'LectureOrder';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  order: ILectureRegistration;
  registrationStatus?: Maybe<Scalars['String']>;
};

export type ILectureProduct = {
  __typename?: 'LectureProduct';
  classAppliedUser?: Maybe<Scalars['Int']>;
  classCategory: Scalars['String'];
  classDescription?: Maybe<Scalars['String']>;
  classMaxUser?: Maybe<Scalars['Int']>;
  classOpen?: Maybe<Scalars['Boolean']>;
  classPrice?: Maybe<Scalars['Int']>;
  classRunTime?: Maybe<Scalars['Int']>;
  classTitle?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  image: Array<ILectureImage>;
  isApplicable?: Maybe<Scalars['Boolean']>;
  lecproduct: Array<IJoinLectureAndProductCategory>;
  mentor: IMentoInfo;
  rating?: Maybe<Scalars['Float']>;
  registration: Array<ILectureRegistration>;
  reviews: Array<ILectureReview>;
  updatedAt: Scalars['DateTime'];
};

export type ILectureProductCategory = {
  __typename?: 'LectureProductCategory';
  category: Array<IJoinLectureAndProductCategory>;
  categoryname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  qtBoard: IQtBoard;
};

export type ILectureRegistration = {
  __typename?: 'LectureRegistration';
  age: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  job: IJob;
  lecproduct: ILectureProduct;
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  preQuestion: Scalars['String'];
  registration: ILectureOrder;
  selfIntroduction: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ILectureReview = {
  __typename?: 'LectureReview';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  lecture: ILectureProduct;
  reviewContents: Scalars['String'];
  starRating: Scalars['Float'];
  user: IUser;
};

export type ILikes = {
  __typename?: 'Likes';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  isLike: Scalars['Boolean'];
  qtBoard: IQtBoard;
  user: IUser;
};

export enum IMentor_Auth {
  Authroized = 'AUTHROIZED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type IMembersQtInput = {
  contents: Scalars['String'];
  qtTags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type IMentoInfo = {
  __typename?: 'MentoInfo';
  certificate: Array<ICertificateImage>;
  companyName: Scalars['String'];
  department: Scalars['String'];
  id: Scalars['String'];
  lecture: Array<ILectureProduct>;
  mentoStatus: IMentor_Auth;
  onlineTime: Scalars['String'];
  selfIntro: Scalars['String'];
  user: IUser;
  work: Array<IJoinMentoAndProductCategory>;
};

export type IMentorForm = {
  companyName: Scalars['String'];
  department: Scalars['String'];
  onlineTime: Scalars['String'];
  selfIntro: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  authMentor: IMentoInfo;
  cancelPoint: IPoint;
  chargePoint: IPoint;
  createComments: IComments;
  createLectureProduct: ILectureProduct;
  createLectureRegistration: ILectureRegistration;
  createLectureReview: ILectureReview;
  createNonMembersQtBoard: IQtBoard;
  createNotice: INotice;
  createQtBoard: IQtBoard;
  createReply: IComments;
  createUser: IUser;
  createlecturePayment: ILectureOrder;
  createlectureproductCategory: ILectureProductCategory;
  deleteComments: Scalars['Boolean'];
  deleteLectureOrder: Scalars['Boolean'];
  deleteLectureProduct: Scalars['Boolean'];
  deleteLectureRegistration: Scalars['Boolean'];
  deleteLectureReview: Scalars['Boolean'];
  deleteNonMembersQtBoard: Scalars['Boolean'];
  deleteNotice: Scalars['Boolean'];
  deleteQtBoard: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deletelectureproductCategory: Scalars['Boolean'];
  followToggle: IFollow;
  login: Scalars['String'];
  logout: Scalars['String'];
  refreshAccessToken: Scalars['String'];
  selectBestComments: IComments;
  sendEmailToken: Scalars['String'];
  sendMentorForm: IMentoInfo;
  sendPhoneNumber: Scalars['String'];
  updateComments: IComments;
  updateLectureProduct: ILectureProduct;
  updateLectureRegistration: ILectureRegistration;
  updateLectureReview: ILectureReview;
  updateMentorInfo: IMentoInfo;
  updateNonMembersQtBoard: IQtBoard;
  updateNotice: INotice;
  updatePassword: IUser;
  updateQtBoard: IQtBoard;
  updateQtLike: ILikes;
  urlToDbCertificate: Array<ICertificateImage>;
  urlToDbLecture: Array<ILectureImage>;
  urlToDbQt: Array<IPostImage>;
  urlToDbUser: Array<IUser>;
};


export type IMutationAuthMentorArgs = {
  mentoId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationCancelPointArgs = {
  impUid: Scalars['String'];
};


export type IMutationChargePointArgs = {
  amount: Scalars['Float'];
  impUid: Scalars['String'];
};


export type IMutationCreateCommentsArgs = {
  contents: Scalars['String'];
  postId: Scalars['String'];
};


export type IMutationCreateLectureProductArgs = {
  createLectureProductInput: ICreateLectureProductInput;
};


export type IMutationCreateLectureRegistrationArgs = {
  createLectureRegistrationInput: ICreateLectureRegistrationInput;
  lectureproductId: Scalars['String'];
};


export type IMutationCreateLectureReviewArgs = {
  createReviewInput: ICreateLectureReviewInput;
};


export type IMutationCreateNonMembersQtBoardArgs = {
  nonMembersQtInput: INonMembersQtInput;
};


export type IMutationCreateNoticeArgs = {
  contents: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationCreateQtBoardArgs = {
  memberQtInput: IMembersQtInput;
};


export type IMutationCreateReplyArgs = {
  commentId: Scalars['String'];
  contents: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  userForm: IUserForm;
};


export type IMutationCreatelecturePaymentArgs = {
  lectureRegistrationId: Scalars['String'];
};


export type IMutationCreatelectureproductCategoryArgs = {
  categoryname: Scalars['String'];
};


export type IMutationDeleteCommentsArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteLectureOrderArgs = {
  lectureorderId: Scalars['String'];
};


export type IMutationDeleteLectureProductArgs = {
  lectureproductId: Scalars['String'];
};


export type IMutationDeleteLectureRegistrationArgs = {
  lectureRegistrationId: Scalars['String'];
};


export type IMutationDeleteLectureReviewArgs = {
  reviewId: Scalars['String'];
};


export type IMutationDeleteNonMembersQtBoardArgs = {
  password: Scalars['String'];
  postId: Scalars['String'];
};


export type IMutationDeleteNoticeArgs = {
  postId: Scalars['String'];
};


export type IMutationDeleteQtBoardArgs = {
  postId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationDeletelectureproductCategoryArgs = {
  lectureproductCategoryId: Scalars['String'];
};


export type IMutationFollowToggleArgs = {
  mentoId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSelectBestCommentsArgs = {
  commentId: Scalars['String'];
};


export type IMutationSendEmailTokenArgs = {
  email: Scalars['String'];
};


export type IMutationSendMentorFormArgs = {
  category: Array<Scalars['String']>;
  mentorForm: IMentorForm;
};


export type IMutationSendPhoneNumberArgs = {
  phoneNumber: Scalars['String'];
};


export type IMutationUpdateCommentsArgs = {
  commentId: Scalars['String'];
  contents: Scalars['String'];
};


export type IMutationUpdateLectureProductArgs = {
  lectureproductId: Scalars['String'];
  updateLectrueProductInput: IUpdateLectureProductInput;
};


export type IMutationUpdateLectureRegistrationArgs = {
  lectureregistrationId: Scalars['String'];
  updateLectrueProductInput: IUpdateLectureRegistrationInput;
};


export type IMutationUpdateLectureReviewArgs = {
  updateReviewInput: IUpdateLectureReviewInput;
};


export type IMutationUpdateMentorInfoArgs = {
  category: Array<Scalars['String']>;
  mentorForm: IMentorForm;
};


export type IMutationUpdateNonMembersQtBoardArgs = {
  nonMembersQtInput: INonMembersQtInput;
  postId: Scalars['String'];
};


export type IMutationUpdateNoticeArgs = {
  contents: Scalars['String'];
  postId: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationUpdatePasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
};


export type IMutationUpdateQtBoardArgs = {
  memberQtInput: IMembersQtInput;
  postId: Scalars['String'];
};


export type IMutationUpdateQtLikeArgs = {
  postId: Scalars['String'];
};


export type IMutationUrlToDbCertificateArgs = {
  filePaths: Array<Scalars['String']>;
};


export type IMutationUrlToDbLectureArgs = {
  filePaths: Array<Scalars['String']>;
  lectureId: Scalars['String'];
};


export type IMutationUrlToDbQtArgs = {
  filePaths: Array<Scalars['String']>;
  qTId: Scalars['String'];
};


export type IMutationUrlToDbUserArgs = {
  filePaths: Array<Scalars['String']>;
};

export type INonMembersQtInput = {
  contents: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  qtTags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type INotice = {
  __typename?: 'Notice';
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  isNotice: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export enum IPoint_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPoint = {
  __typename?: 'Point';
  amount: Scalars['Int'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: IPoint_Status_Enum;
  user: IUser;
};

export type IPostImage = {
  __typename?: 'PostImage';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type IQtBoard = {
  __typename?: 'QtBoard';
  comments?: Maybe<Array<IComments>>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  image: Array<IPostImage>;
  likes?: Maybe<Array<ILikes>>;
  likescount: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  point: Scalars['Int'];
  qtTags?: Maybe<Array<ILectureProductCategory>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  emailCheckToken: Scalars['Boolean'];
  fetchAllPostCount: Scalars['Int'];
  fetchAuthorMentor: Array<IMentoInfo>;
  fetchLectureDetail: ILectureProduct;
  fetchLectureProduct: ILectureProduct;
  fetchLectureRating: Array<ILectureProduct>;
  fetchLectureReview: ILectureReview;
  fetchLectureReviews: Array<ILectureReview>;
  fetchLikePost: Array<IQtBoard>;
  fetchMentor: Array<IMentoInfo>;
  fetchMentorUser: IUser;
  fetchMyComments: Array<IComments>;
  fetchMyMinusWallet: Array<IWallet>;
  fetchMyPlusWallet: Array<IWallet>;
  fetchMyPointHistory: Array<IPoint>;
  fetchMyQt: Array<IQtBoard>;
  fetchNewClasses: Array<ILectureProduct>;
  fetchNotice: INotice;
  fetchNotices: Array<INotice>;
  fetchProducts: Array<IQtBoard>;
  fetchQtBoard: IQtBoard;
  fetchQtBoards: Array<IQtBoard>;
  fetchReComments: Array<IComments>;
  fetchSelectedTagMentor: Array<IMentoInfo>;
  fetchUser: IUser;
  fetchlectureOrder: ILectureOrder;
  fetchlectureOrders: Array<ILectureOrder>;
  fetchlectureProducts: Array<ILectureProduct>;
  fetchlectureRegistration: ILectureRegistration;
  fetchlectureRegistrations: Array<ILectureRegistration>;
  fetchlectureproductCategories: Array<ILectureProductCategory>;
  getSignedUrlCertificate: Array<Scalars['String']>;
  getSignedUrlLQt: Array<Scalars['String']>;
  getSignedUrlLecture: Array<Scalars['String']>;
  getSignedUrlUser: Array<Scalars['String']>;
  isCheckEmail: Scalars['Boolean'];
  phoneCheckToken: Scalars['Boolean'];
  putSignedUrlCertificate: Array<Scalars['String']>;
  putSignedUrlLecture: Array<Scalars['String']>;
  putSignedUrlQt: Array<Scalars['String']>;
  putSignedUrlUser: Array<Scalars['String']>;
};


export type IQueryEmailCheckTokenArgs = {
  email: Scalars['String'];
  inputToken: Scalars['String'];
};


export type IQueryFetchLectureDetailArgs = {
  lectureId: Scalars['String'];
};


export type IQueryFetchLectureProductArgs = {
  lectureproductId: Scalars['String'];
};


export type IQueryFetchLectureReviewArgs = {
  reviewId: Scalars['String'];
};


export type IQueryFetchLectureReviewsArgs = {
  lectureId: Scalars['String'];
};


export type IQueryFetchMentorArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchMyCommentsArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchMyQtArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchNoticeArgs = {
  postId: Scalars['String'];
};


export type IQueryFetchProductsArgs = {
  search: Scalars['String'];
};


export type IQueryFetchQtBoardArgs = {
  postId: Scalars['String'];
};


export type IQueryFetchQtBoardsArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchReCommentsArgs = {
  commentId: Scalars['String'];
};


export type IQueryFetchSelectedTagMentorArgs = {
  categoryName: Scalars['String'];
  page: Scalars['Float'];
};


export type IQueryFetchlectureOrderArgs = {
  lectureRegistrationId: Scalars['String'];
  lectureorderId: Scalars['String'];
};


export type IQueryFetchlectureRegistrationArgs = {
  lectureRegistrationId: Scalars['String'];
};


export type IQueryFetchlectureRegistrationsArgs = {
  search: Scalars['String'];
};


export type IQueryGetSignedUrlCertificateArgs = {
  mentoId: Scalars['String'];
};


export type IQueryGetSignedUrlLQtArgs = {
  qTId: Scalars['String'];
};


export type IQueryGetSignedUrlLectureArgs = {
  lectureId: Scalars['String'];
};


export type IQueryIsCheckEmailArgs = {
  email: Scalars['String'];
};


export type IQueryPhoneCheckTokenArgs = {
  inputToken: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type IQueryPutSignedUrlCertificateArgs = {
  fileNames: Array<Scalars['String']>;
};


export type IQueryPutSignedUrlLectureArgs = {
  fileNames: Array<Scalars['String']>;
  lectureId: Scalars['String'];
};


export type IQueryPutSignedUrlQtArgs = {
  fileNames: Array<Scalars['String']>;
  qTId: Scalars['String'];
};


export type IQueryPutSignedUrlUserArgs = {
  fileNames: Array<Scalars['String']>;
};

export enum IUser_Role {
  Admin = 'ADMIN',
  Mentee = 'MENTEE',
  Mentor = 'MENTOR'
}

export type IUpdateLectureProductInput = {
  classDescription?: InputMaybe<Scalars['String']>;
  classMaxUser?: InputMaybe<Scalars['Int']>;
  classPrice?: InputMaybe<Scalars['Int']>;
  classRunTime?: InputMaybe<Scalars['Int']>;
  classTitle?: InputMaybe<Scalars['String']>;
};

export type IUpdateLectureRegistrationInput = {
  age: Scalars['Int'];
  phoneNumber: Scalars['String'];
  preQuestion?: InputMaybe<Scalars['String']>;
  selfIntroduction: Scalars['String'];
};

export type IUpdateLectureReviewInput = {
  reviewContents: Scalars['String'];
  reviewId: Scalars['String'];
  starRating: Scalars['Float'];
};

export type IUser = {
  __typename?: 'User';
  answerCount: Scalars['Int'];
  comments: Array<IComments>;
  createdAt: Scalars['DateTime'];
  deleteDate: Scalars['DateTime'];
  email: Scalars['String'];
  following: Scalars['Int'];
  gender: Scalars['String'];
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  interest?: Maybe<Array<IJoinUserAndProductCategory>>;
  likes: Array<ILikes>;
  mentor: IMentoInfo;
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  point: Scalars['Int'];
  qtBoard: Array<IQtBoard>;
  registration: Array<ILectureRegistration>;
  reviews: Array<ILectureReview>;
  role: IUser_Role;
  updatedAt: Scalars['DateTime'];
};

export type IUserForm = {
  email: Scalars['String'];
  gender: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type IWallet = {
  __typename?: 'Wallet';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  division: Scalars['String'];
  id: Scalars['String'];
  point: Scalars['Int'];
  user: IUser;
};
