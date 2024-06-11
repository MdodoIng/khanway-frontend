import { ReadStream } from 'fs';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream( options?:{ encoding?: string, highWaterMark?: number } ): ReadStream;
}
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: Promise<FileUpload>; output: Promise<FileUpload>; }
};

export type Admin = {
  __typename?: 'Admin';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 관리자 아이디 */
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** 관리자 비밀번호 */
  password?: Maybe<Scalars['String']['output']>;
  /** 관리자 권한 */
  role?: Maybe<AdminRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminInputType = {
  /** 관리자 아이디 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 관리자 비밀번호 */
  password?: InputMaybe<Scalars['String']['input']>;
  /** 관리자 권한 */
  role?: InputMaybe<AdminRole>;
};

export enum AdminRole {
  Admin = 'ADMIN',
  AdminKr = 'ADMIN_KR',
  SuperAdmin = 'SUPER_ADMIN'
}

export type AuthFindEmailInput = {
  /** countryCode */
  countryCode?: InputMaybe<Scalars['String']['input']>;
  /** phoneNumber */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AuthFindEmailOutput = {
  __typename?: 'AuthFindEmailOutput';
  error?: Maybe<ErrorOutput>;
  /** user */
  user?: Maybe<User>;
};

export type AuthFindNewPasswordInput = {
  /** token */
  authToken: Scalars['String']['input'];
  /** confirmPassword */
  confirmPassword: Scalars['String']['input'];
  /** password */
  password: Scalars['String']['input'];
};

export type AuthFindNewPasswordOutput = {
  __typename?: 'AuthFindNewPasswordOutput';
  error?: Maybe<ErrorOutput>;
  /** isSuccess */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AuthFindSmsSendInput = {
  /** countryCode */
  countryCode: Scalars['String']['input'];
  /** email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** phoneNumber */
  phoneNumber: Scalars['String']['input'];
};

export type AuthFindSmsSendOutput = {
  __typename?: 'AuthFindSMSSendOutput';
  error?: Maybe<ErrorOutput>;
  /** isSuccess */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AuthFindSmsVerifyInput = {
  /** countryCode */
  countryCode: Scalars['String']['input'];
  /** phone */
  phoneNumber: Scalars['String']['input'];
  /** verifyCode */
  verifyCode: Scalars['String']['input'];
};

export type AuthFindSmsVerifyOutput = {
  __typename?: 'AuthFindSMSVerifyOutput';
  error?: Maybe<ErrorOutput>;
  /** isSuccess */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AuthMailResetUrlInput = {
  /** 이메일 */
  email?: InputMaybe<Scalars['String']['input']>;
};

export type AuthMailResetUrlOutput = {
  __typename?: 'AuthMailResetURLOutput';
  error?: Maybe<ErrorOutput>;
  /** 성공여부 */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AuthMailSendInput = {
  email: Scalars['String']['input'];
};

export type AuthMailSendOutput = {
  __typename?: 'AuthMailSendOutput';
  error?: Maybe<ErrorOutput>;
  success: Scalars['Boolean']['output'];
};

export type AuthMailVerifyInput = {
  email: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type AuthMailVerifyOutput = {
  __typename?: 'AuthMailVerifyOutput';
  error?: Maybe<ErrorOutput>;
  success: Scalars['Boolean']['output'];
};

export type AuthSmsSendInput = {
  /** 국가코드 */
  countryCode?: InputMaybe<Scalars['String']['input']>;
  /** 폰넘버 */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AuthSmsSendOutput = {
  __typename?: 'AuthSMSSendOutput';
  error?: Maybe<ErrorOutput>;
  /** 성공여부 */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AuthSmsVerifyInput = {
  /** 국가코드 */
  countryCode?: InputMaybe<Scalars['String']['input']>;
  /** 폰넘버 */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** 인증번호 */
  verifyCode?: InputMaybe<Scalars['String']['input']>;
};

export type AuthSmsVerifyOutput = {
  __typename?: 'AuthSMSVerifyOutput';
  error?: Maybe<ErrorOutput>;
  /** 성공여부 */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AuthTokenVerifyInput = {
  /** Token */
  authToken?: InputMaybe<Scalars['String']['input']>;
};

export type AuthTokenVerifyOutput = {
  __typename?: 'AuthTokenVerifyOutput';
  error?: Maybe<ErrorOutput>;
  /** Token Verify */
  verify?: Maybe<Scalars['Boolean']['output']>;
};

export type AuthVerifyOutput = {
  __typename?: 'AuthVerifyOutput';
  error?: Maybe<ErrorOutput>;
  /** is Verified */
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  /** User */
  user?: Maybe<User>;
};

export type CheckOutOrderInput = {
  /** order_id */
  order_id?: InputMaybe<Scalars['String']['input']>;
};

export type CheckOutOrderOutput = {
  __typename?: 'CheckOutOrderOutput';
  error?: Maybe<ErrorOutput>;
  /** success */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateBuyOrderInput = {
  nftId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateBuyOrderOutput = {
  __typename?: 'CreateBuyOrderOutput';
  approveUrl?: Maybe<Scalars['String']['output']>;
  error?: Maybe<ErrorOutput>;
  orderId?: Maybe<Scalars['String']['output']>;
};

export type CreateMintOrderInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['String']['input']>;
  /** Direct Depositor Name */
  depositorName?: InputMaybe<Scalars['String']['input']>;
  orderType?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMintOrderOutput = {
  __typename?: 'CreateMintOrderOutput';
  approveUrl?: Maybe<Scalars['String']['output']>;
  error?: Maybe<ErrorOutput>;
  orderId?: Maybe<Scalars['String']['output']>;
};

export type CreateSilverInput = {
  /** User Email */
  email?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSilverOutput = {
  __typename?: 'CreateSilverOutput';
  error?: Maybe<ErrorOutput>;
  /** Event Silver Id */
  id?: Maybe<Scalars['Int']['output']>;
};

export type CreateWithdrawRequestInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  /** Withdraw Detail Type */
  detailType: Scalars['String']['input'];
};

export type CreateWithdrawRequestOutput = {
  __typename?: 'CreateWithdrawRequestOutput';
  error?: Maybe<ErrorOutput>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
};

export type CurrencyExchange = {
  __typename?: 'CurrencyExchange';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CurrencyExchangeInputType = {
  value?: InputMaybe<Scalars['String']['input']>;
};

export type EditUserInput = {
  id: Scalars['Float']['input'];
  newName?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  /** Profile Image */
  profileImage?: InputMaybe<Scalars['Upload']['input']>;
};

export type EditUserOutput = {
  __typename?: 'EditUserOutput';
  error?: Maybe<ErrorOutput>;
  user?: Maybe<User>;
};

export type ErrorOutput = {
  __typename?: 'ErrorOutput';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type EventGold = {
  __typename?: 'EventGold';
  /** Gold Egg Category */
  category?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Silver Egg History List */
  history?: Maybe<Array<UserHistory>>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Gold Egg isOpen */
  isOpen?: Maybe<Scalars['Boolean']['output']>;
  /** Gold Egg NFT */
  nft?: Maybe<Array<Nft>>;
  /** Gold Egg Price */
  price?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Gold Egg Owner */
  user?: Maybe<User>;
  /** Gold Egg Owner */
  userId?: Maybe<Scalars['Int']['output']>;
};

export type EventGoldInput = {
  /** Gold Egg Category */
  category?: InputMaybe<Scalars['Int']['input']>;
  /** Silver Egg History List */
  history?: InputMaybe<Array<UserHistoryInputType>>;
  /** Gold Egg isOpen */
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  /** Gold Egg NFT */
  nft?: InputMaybe<Array<NftInputType>>;
  /** Gold Egg Price */
  price?: InputMaybe<Scalars['Int']['input']>;
  /** Gold Egg Owner */
  user?: InputMaybe<UserInputType>;
  /** Gold Egg Owner */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type EventSilver = {
  __typename?: 'EventSilver';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Silver Egg History List */
  history?: Maybe<Array<UserHistory>>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Silver Egg isOpen */
  isOpen?: Maybe<Scalars['Boolean']['output']>;
  /** Silver Egg NFT */
  nft?: Maybe<Nft>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Silver Egg Owner */
  user?: Maybe<User>;
  /** Silver Egg Owner */
  userId?: Maybe<Scalars['Int']['output']>;
};

export type EventSilverInput = {
  /** Silver Egg History List */
  history?: InputMaybe<Array<UserHistoryInputType>>;
  /** Silver Egg isOpen */
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  /** Silver Egg NFT */
  nft?: InputMaybe<NftInputType>;
  /** Silver Egg Owner */
  user?: InputMaybe<UserInputType>;
  /** Silver Egg Owner */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type FindUserByNicknameInput = {
  nickname: Scalars['String']['input'];
};

export type FindUserByNicknameOutput = {
  __typename?: 'FindUserByNicknameOutput';
  error?: Maybe<ErrorOutput>;
  user?: Maybe<Scalars['Boolean']['output']>;
};

export type GetBlockNumberOutput = {
  __typename?: 'GetBlockNumberOutput';
  error?: Maybe<ErrorOutput>;
  value?: Maybe<Scalars['String']['output']>;
};

export type GetCurrencyExchangeOutput = {
  __typename?: 'GetCurrencyExchangeOutput';
  currencyExchange?: Maybe<CurrencyExchange>;
  error?: Maybe<ErrorOutput>;
};

export type GetKycOutput = {
  __typename?: 'GetKycOutput';
  error?: Maybe<ErrorOutput>;
  kyc?: Maybe<UserKyc>;
};

export type GetMainNfwListOutput = {
  __typename?: 'GetMainNFWListOutput';
  error?: Maybe<ErrorOutput>;
  /** on Sale NFW List */
  onSaleNFTList?: Maybe<Array<Nft>>;
};

export type GetNftByIdInput = {
  /** NFT Id */
  id: Scalars['Float']['input'];
};

export type GetNftByIdOutput = {
  __typename?: 'GetNFTByIdOutput';
  error?: Maybe<ErrorOutput>;
  /** NFT */
  nft?: Maybe<Nft>;
};

export type GetNftByOwnerIdInput = {
  /** NFT Metadata Name */
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  /** Search Keyword */
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type GetNftByOwnerIdOutput = {
  __typename?: 'GetNFTByOwnerIdOutput';
  count?: Maybe<Scalars['Int']['output']>;
  error?: Maybe<ErrorOutput>;
  /** Event Gold List */
  golds?: Maybe<Array<EventGold>>;
  /** NFT List */
  nfts?: Maybe<Array<Nft>>;
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** Event Silver List */
  silvers?: Maybe<Array<EventSilver>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type GetNftListInput = {
  /** 카테고리 */
  category?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 판매중 상태 */
  isOnSale?: InputMaybe<Array<NftIsOnSale>>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  /** 금액 */
  price?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  /** 남은 횟수 */
  tradeCount?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type GetNftListOutput = {
  __typename?: 'GetNFTListOutput';
  count?: Maybe<Scalars['Int']['output']>;
  error?: Maybe<ErrorOutput>;
  /** NFT 리스트 */
  nfts?: Maybe<Array<Nft>>;
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type GetPaymentStateInput = {
  /** Order Id */
  orderId?: InputMaybe<Scalars['String']['input']>;
};

export type GetPaymentStateOutput = {
  __typename?: 'GetPaymentStateOutput';
  error?: Maybe<ErrorOutput>;
  /** Payment */
  payment?: Maybe<Payment>;
};

export type GetTotalPriceCapOutput = {
  __typename?: 'GetTotalPriceCapOutput';
  error?: Maybe<ErrorOutput>;
  /** NFT Price Cap */
  nftPriceCap?: Maybe<Array<NftPriceCap>>;
};

export type GetTotalSaleAmountOutput = {
  __typename?: 'GetTotalSaleAmountOutput';
  error?: Maybe<ErrorOutput>;
  /** amount */
  totalSaleAmount?: Maybe<Scalars['Int']['output']>;
};

export type GetUserHistoryByIdInput = {
  /** Detail History Type */
  detailType?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  /** History Type */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GetUserHistoryByIdOutput = {
  __typename?: 'GetUserHistoryByIdOutput';
  count?: Maybe<Scalars['Int']['output']>;
  error?: Maybe<ErrorOutput>;
  /** User Payment History */
  histories?: Maybe<Array<UserHistory>>;
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type GetUserInput = {
  id: Scalars['Int']['input'];
};

export type GetUserOutput = {
  __typename?: 'GetUserOutput';
  error?: Maybe<ErrorOutput>;
  user?: Maybe<User>;
};

export type LoginInput = {
  /** email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** password */
  password?: InputMaybe<Scalars['String']['input']>;
  remember?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  access_token?: Maybe<Scalars['String']['output']>;
  error?: Maybe<ErrorOutput>;
  user?: Maybe<User>;
};

export type Metadata = {
  __typename?: 'Metadata';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** NFT Description */
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** NFT Image */
  image?: Maybe<Scalars['String']['output']>;
  /** NFT Name */
  name?: Maybe<Scalars['String']['output']>;
  /** NFT */
  nft?: Maybe<Nft>;
  /** NFT Id */
  nftId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MetadataInputType = {
  /** NFT Description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** NFT Image */
  image?: InputMaybe<Scalars['String']['input']>;
  /** NFT Name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** NFT */
  nft?: InputMaybe<NftInputType>;
  /** NFT Id */
  nftId?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authFindNewPassword: AuthFindNewPasswordOutput;
  authFindSMSSend: AuthFindSmsSendOutput;
  authFindSMSVerify: AuthFindSmsVerifyOutput;
  authMailSend: AuthMailSendOutput;
  authSMSSend: AuthSmsSendOutput;
  authSMSVerify: AuthSmsVerifyOutput;
  checkOutOrder: CheckOutOrderOutput;
  createBuyOrder: CreateBuyOrderOutput;
  createMintOrder: CreateMintOrderOutput;
  createSilver: CreateSilverOutput;
  createWithdrawRequest: CreateWithdrawRequestOutput;
  editUser: EditUserOutput;
  login: LoginOutput;
  onRegisterKYC: OnRegisterKycOutput;
  onStartExtraStack: OnStartExtraStackOutput;
  onUpdateSNSVerify: OnUpdateSnsVerifyOutput;
  onUploadKYCImage: OnUploadKycImageOutput;
  openGoldEgg: OpenGoldEggOutput;
  openSilverEgg: OpenSilverEggOutput;
  signUp: SignUpOutput;
  updateNFTSale: UpdateNftSaleOutput;
};


export type MutationAuthFindNewPasswordArgs = {
  input: AuthFindNewPasswordInput;
};


export type MutationAuthFindSmsSendArgs = {
  input: AuthFindSmsSendInput;
};


export type MutationAuthFindSmsVerifyArgs = {
  input: AuthFindSmsVerifyInput;
};


export type MutationAuthMailSendArgs = {
  input: AuthMailSendInput;
};


export type MutationAuthSmsSendArgs = {
  input: AuthSmsSendInput;
};


export type MutationAuthSmsVerifyArgs = {
  input: AuthSmsVerifyInput;
};


export type MutationCheckOutOrderArgs = {
  input: CheckOutOrderInput;
};


export type MutationCreateBuyOrderArgs = {
  input: CreateBuyOrderInput;
};


export type MutationCreateMintOrderArgs = {
  input: CreateMintOrderInput;
};


export type MutationCreateSilverArgs = {
  input: CreateSilverInput;
};


export type MutationCreateWithdrawRequestArgs = {
  input: CreateWithdrawRequestInput;
};


export type MutationEditUserArgs = {
  input: EditUserInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationOnRegisterKycArgs = {
  input: OnRegisterKycInput;
};


export type MutationOnUploadKycImageArgs = {
  input: OnUploadKycImageInput;
};


export type MutationOpenGoldEggArgs = {
  input: OpenGoldEggInput;
};


export type MutationOpenSilverEggArgs = {
  input: OpenSilverEggInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateNftSaleArgs = {
  input: UpdateNftSaleInput;
};

export type Nft = {
  __typename?: 'NFT';
  /** Category */
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Creator */
  creator?: Maybe<User>;
  /** Creator Id */
  creatorId?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Event Gold */
  eventGold?: Maybe<EventGold>;
  /** Event Gold Id */
  eventGoldId?: Maybe<Scalars['Int']['output']>;
  /** Event Silver */
  eventSilver?: Maybe<EventSilver>;
  /** Event Silver Id */
  eventSilverId?: Maybe<Scalars['Int']['output']>;
  /** User History */
  history?: Maybe<Array<UserHistory>>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Is Fee Able */
  isFeeAble?: Maybe<Scalars['Boolean']['output']>;
  /** Is On Sale */
  isOnSale?: Maybe<NftIsOnSale>;
  /** Metadata */
  metadata?: Maybe<Metadata>;
  /** Owner */
  owner?: Maybe<User>;
  /** Owner Id */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** Pre Owner */
  preOwner?: Maybe<Whitelist>;
  /** Pre Owner Id */
  preOwnerId?: Maybe<Scalars['Int']['output']>;
  /** Price */
  price?: Maybe<Scalars['String']['output']>;
  /** NFT State */
  state: NftState;
  /** Token Id */
  tokenId?: Maybe<Scalars['Int']['output']>;
  /** Token URI */
  tokenURI?: Maybe<Scalars['String']['output']>;
  /** Trade Count */
  tradeCount?: Maybe<Scalars['Int']['output']>;
  /** Transaction History */
  transactionHistory?: Maybe<Array<TransactionHistory>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User Extra Stack */
  userExtraStack?: Maybe<UserExtraStack>;
};

export type NftInputType = {
  /** Category */
  category?: InputMaybe<Scalars['String']['input']>;
  /** Creator */
  creator?: InputMaybe<UserInputType>;
  /** Creator Id */
  creatorId?: InputMaybe<Scalars['Int']['input']>;
  /** Event Gold */
  eventGold?: InputMaybe<EventGoldInput>;
  /** Event Gold Id */
  eventGoldId?: InputMaybe<Scalars['Int']['input']>;
  /** Event Silver */
  eventSilver?: InputMaybe<EventSilverInput>;
  /** Event Silver Id */
  eventSilverId?: InputMaybe<Scalars['Int']['input']>;
  /** User History */
  history?: InputMaybe<Array<UserHistoryInputType>>;
  /** Is Fee Able */
  isFeeAble?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is On Sale */
  isOnSale?: InputMaybe<NftIsOnSale>;
  /** Metadata */
  metadata?: InputMaybe<MetadataInputType>;
  /** Owner */
  owner?: InputMaybe<UserInputType>;
  /** Owner Id */
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  /** Pre Owner */
  preOwner?: InputMaybe<WhitelistInputType>;
  /** Pre Owner Id */
  preOwnerId?: InputMaybe<Scalars['Int']['input']>;
  /** Price */
  price?: InputMaybe<Scalars['String']['input']>;
  /** NFT State */
  state: NftState;
  /** Token Id */
  tokenId?: InputMaybe<Scalars['Int']['input']>;
  /** Token URI */
  tokenURI?: InputMaybe<Scalars['String']['input']>;
  /** Trade Count */
  tradeCount?: InputMaybe<Scalars['Int']['input']>;
  /** Transaction History */
  transactionHistory?: InputMaybe<Array<TransactionHistoryInputType>>;
  /** User Extra Stack */
  userExtraStack?: InputMaybe<UserExtraStackInput>;
};

export enum NftIsOnSale {
  NotOnSale = 'NOT_ON_SALE',
  OnSale = 'ON_SALE',
  PendingPayment = 'PENDING_PAYMENT'
}

export type NftPriceCap = {
  __typename?: 'NFTPriceCap';
  currentCap: Scalars['Int']['output'];
  maxCap: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
};

export enum NftState {
  Fail = 'FAIL',
  Pending = 'PENDING',
  Start = 'START',
  Success = 'SUCCESS'
}

export type NicknameVerifyInput = {
  nickname: Scalars['String']['input'];
};

export type NicknameVerifyOutput = {
  __typename?: 'NicknameVerifyOutput';
  error?: Maybe<ErrorOutput>;
  success: Scalars['Boolean']['output'];
};

export type OnRegisterKycInput = {
  /** 통장 번호 */
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  /** 통장 은행 */
  bankName?: InputMaybe<Scalars['String']['input']>;
  /** 통장 사본 */
  bankStatementImage?: InputMaybe<Scalars['String']['input']>;
  /** 도시 */
  city?: InputMaybe<Scalars['String']['input']>;
  /** 국가 */
  country?: InputMaybe<Scalars['String']['input']>;
  /** 생년월일 */
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  /** 문서 뒷면 이미지 */
  documentBackImage?: InputMaybe<Scalars['String']['input']>;
  /** 문서 앞면 이미지 */
  documentFrontImage?: InputMaybe<Scalars['String']['input']>;
  /** 문서 발행 국가코드 */
  documentIssueCountryCode?: InputMaybe<Scalars['String']['input']>;
  /** 문서 유형 */
  documentType?: InputMaybe<UserKycDocumentType>;
  /** 이름 (성) */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** 집 주소 */
  homeAddress?: InputMaybe<Scalars['String']['input']>;
  /** 이름 (이름) */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** 우편번호 */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Reject Message */
  rejectMessage?: InputMaybe<Scalars['String']['input']>;
  /** 거주지 주소 */
  residentialAddress?: InputMaybe<Scalars['String']['input']>;
  /** 상태 */
  status?: InputMaybe<UserKycStatus>;
};

export type OnRegisterKycOutput = {
  __typename?: 'OnRegisterKYCOutput';
  error?: Maybe<ErrorOutput>;
  /** 성공 여부 */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type OnStartExtraStackOutput = {
  __typename?: 'OnStartExtraStackOutput';
  error?: Maybe<ErrorOutput>;
  /** 성공 여부 */
  success: Scalars['Boolean']['output'];
};

export type OnUpdateSnsVerifyOutput = {
  __typename?: 'OnUpdateSNSVerifyOutput';
  error?: Maybe<ErrorOutput>;
  /** 성공 여부 */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type OnUploadKycImageInput = {
  /** 이미지 */
  image?: InputMaybe<Scalars['Upload']['input']>;
  /** Type */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type OnUploadKycImageOutput = {
  __typename?: 'OnUploadKYCImageOutput';
  error?: Maybe<ErrorOutput>;
  /** Image URL */
  url?: Maybe<Scalars['String']['output']>;
};

export type OpenGoldEggInput = {
  /** event gold Id */
  eventGoldId?: InputMaybe<Scalars['Int']['input']>;
};

export type OpenGoldEggOutput = {
  __typename?: 'OpenGoldEggOutput';
  error?: Maybe<ErrorOutput>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
};

export type OpenSilverEggInput = {
  /** Event Silver Egg Id */
  eventSilverId?: InputMaybe<Scalars['Int']['input']>;
};

export type OpenSilverEggOutput = {
  __typename?: 'OpenSilverEggOutput';
  error?: Maybe<ErrorOutput>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
};

export type Payment = {
  __typename?: 'Payment';
  /** amount */
  amount: Scalars['String']['output'];
  /** count */
  count: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** deposit date */
  depositDate?: Maybe<Scalars['String']['output']>;
  /** depositor name */
  depositorName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** nftId */
  nftId?: Maybe<Scalars['Int']['output']>;
  /** orderId */
  orderId: Scalars['String']['output'];
  /** Order Type */
  orderType: PaymentOrderType;
  /** 상태 */
  status: PaymentStatus;
  /** total amount */
  totalAmount?: Maybe<Scalars['Int']['output']>;
  /** 타입 */
  type: PaymentType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** userId */
  userId: Scalars['Int']['output'];
};

export type PaymentInputType = {
  /** amount */
  amount: Scalars['String']['input'];
  /** count */
  count: Scalars['Int']['input'];
  /** deposit date */
  depositDate?: InputMaybe<Scalars['String']['input']>;
  /** depositor name */
  depositorName?: InputMaybe<Scalars['String']['input']>;
  /** nftId */
  nftId?: InputMaybe<Scalars['Int']['input']>;
  /** orderId */
  orderId: Scalars['String']['input'];
  /** Order Type */
  orderType: PaymentOrderType;
  /** 상태 */
  status: PaymentStatus;
  /** total amount */
  totalAmount?: InputMaybe<Scalars['Int']['input']>;
  /** 타입 */
  type: PaymentType;
  /** userId */
  userId: Scalars['Int']['input'];
};

export enum PaymentOrderType {
  DirectDeposit = 'DIRECT_DEPOSIT',
  Paypal = 'PAYPAL'
}

export enum PaymentStatus {
  Approved = 'APPROVED',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Created = 'CREATED',
  Failed = 'FAILED',
  Minting = 'MINTING',
  Refunded = 'REFUNDED'
}

export enum PaymentType {
  Buy = 'BUY',
  Mint = 'MINT'
}

export type Query = {
  __typename?: 'Query';
  authFindEmail: AuthFindEmailOutput;
  authMailResetURL: AuthMailResetUrlOutput;
  authMailVerify: AuthMailVerifyOutput;
  authTokenVerify: AuthTokenVerifyOutput;
  authVerify: AuthVerifyOutput;
  findUserByNickname: FindUserByNicknameOutput;
  getBlockNumber: GetBlockNumberOutput;
  getCurrencyExchange: GetCurrencyExchangeOutput;
  getKYC: GetKycOutput;
  getMainNFTList: GetMainNfwListOutput;
  getNFTById: GetNftByIdOutput;
  getNFTByOwnerId: GetNftByOwnerIdOutput;
  getNFTList: GetNftListOutput;
  getNFTPriceCap: GetTotalPriceCapOutput;
  getPaymentState: GetPaymentStateOutput;
  getTotalSaleAmount: GetTotalSaleAmountOutput;
  getUser: GetUserOutput;
  getUserHistoryByUserId: GetUserHistoryByIdOutput;
  nicknameVerify: NicknameVerifyOutput;
  verifyPassword: VerifyPasswordOutput;
};


export type QueryAuthFindEmailArgs = {
  input: AuthFindEmailInput;
};


export type QueryAuthMailResetUrlArgs = {
  input: AuthMailResetUrlInput;
};


export type QueryAuthMailVerifyArgs = {
  input: AuthMailVerifyInput;
};


export type QueryAuthTokenVerifyArgs = {
  input: AuthTokenVerifyInput;
};


export type QueryFindUserByNicknameArgs = {
  input: FindUserByNicknameInput;
};


export type QueryGetNftByIdArgs = {
  input: GetNftByIdInput;
};


export type QueryGetNftByOwnerIdArgs = {
  input: GetNftByOwnerIdInput;
};


export type QueryGetNftListArgs = {
  input: GetNftListInput;
};


export type QueryGetPaymentStateArgs = {
  input: GetPaymentStateInput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};


export type QueryGetUserHistoryByUserIdArgs = {
  input: GetUserHistoryByIdInput;
};


export type QueryNicknameVerifyArgs = {
  input: NicknameVerifyInput;
};


export type QueryVerifyPasswordArgs = {
  input: VerifyPasswordInput;
};

export enum SellState {
  Pending = 'PENDING',
  Selling = 'SELLING',
  Sold = 'SOLD'
}

export type SignUpInput = {
  /** 출금 가능 금액 */
  available_amount?: InputMaybe<Scalars['String']['input']>;
  /** 사용자 잔액 */
  balance?: InputMaybe<Scalars['String']['input']>;
  /** 국가코드 */
  countryCode?: InputMaybe<Scalars['String']['input']>;
  /** email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** KYC 인증 여부 */
  isKYCVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /** SNS 인증 여부 */
  isSNSVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /** Nickname */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** 사용자 리워드 잔액 */
  reward_balance?: InputMaybe<Scalars['String']['input']>;
  /** Whitelist */
  whitelist?: InputMaybe<WhitelistInputType>;
};

export type SignUpOutput = {
  __typename?: 'SignUpOutput';
  error?: Maybe<ErrorOutput>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type TransactionHistory = {
  __typename?: 'TransactionHistory';
  /** Admin ID */
  adminId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Error */
  error?: Maybe<Scalars['String']['output']>;
  /** from user address */
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** NFT Id */
  nftId?: Maybe<Scalars['Int']['output']>;
  /** Nonce */
  nonce: Scalars['Int']['output'];
  /** Payment ID */
  paymentId?: Maybe<Scalars['Int']['output']>;
  /** Retry count */
  retryCount: Scalars['Int']['output'];
  /** Transaction State */
  state?: Maybe<TransactionState>;
  /** to user address */
  to?: Maybe<Scalars['String']['output']>;
  /** Token Id */
  tokenId?: Maybe<Scalars['Int']['output']>;
  /** Transaction Hash */
  transactionHash?: Maybe<Scalars['String']['output']>;
  /** Transaction Type */
  type?: Maybe<TransactionType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Value */
  value?: Maybe<Scalars['String']['output']>;
};

export type TransactionHistoryInputType = {
  /** Admin ID */
  adminId?: InputMaybe<Scalars['Int']['input']>;
  /** Error */
  error?: InputMaybe<Scalars['String']['input']>;
  /** from user address */
  from?: InputMaybe<Scalars['String']['input']>;
  /** NFT Id */
  nftId?: InputMaybe<Scalars['Int']['input']>;
  /** Nonce */
  nonce: Scalars['Int']['input'];
  /** Payment ID */
  paymentId?: InputMaybe<Scalars['Int']['input']>;
  /** Retry count */
  retryCount: Scalars['Int']['input'];
  /** Transaction State */
  state?: InputMaybe<TransactionState>;
  /** to user address */
  to?: InputMaybe<Scalars['String']['input']>;
  /** Token Id */
  tokenId?: InputMaybe<Scalars['Int']['input']>;
  /** Transaction Hash */
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  /** Transaction Type */
  type?: InputMaybe<TransactionType>;
  /** Value */
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum TransactionState {
  Fail = 'FAIL',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export enum TransactionType {
  CurrencyTransfer = 'CURRENCY_TRANSFER',
  Mint = 'MINT',
  Transfer = 'TRANSFER'
}

export type UpdateNftSaleInput = {
  /** 판매 여부 */
  isOnSale: NftIsOnSale;
  /** NFT Id */
  nftId: Scalars['Float']['input'];
};

export type UpdateNftSaleOutput = {
  __typename?: 'UpdateNFTSaleOutput';
  error?: Maybe<ErrorOutput>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type User = {
  __typename?: 'User';
  /** wallet address */
  address?: Maybe<Scalars['String']['output']>;
  /** 출금 가능 금액 */
  available_amount?: Maybe<Scalars['String']['output']>;
  /** 사용자 잔액 */
  balance?: Maybe<Scalars['String']['output']>;
  /** 국가코드 */
  countryCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** email */
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** KYC 인증 여부 */
  isKYCVerified?: Maybe<Scalars['Boolean']['output']>;
  /** SNS 인증 여부 */
  isSNSVerified?: Maybe<Scalars['Boolean']['output']>;
  /** 선구매자 여부 */
  isWhitelist?: Maybe<Scalars['Boolean']['output']>;
  /** Nickname */
  nickname?: Maybe<Scalars['String']['output']>;
  /** password */
  password?: Maybe<Scalars['String']['output']>;
  /** 폰넘버 */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** Postal Code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Profile Image */
  profileImage?: Maybe<Scalars['String']['output']>;
  /** 사용자 리워드 잔액 */
  reward_balance?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Whitelist */
  whitelist?: Maybe<Whitelist>;
};

export type UserExtraStack = {
  __typename?: 'UserExtraStack';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Stack NFT */
  nft?: Maybe<Nft>;
  /** NFT Id */
  nftId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Stack Owner */
  user?: Maybe<User>;
  /** User Id */
  userId: Scalars['Int']['output'];
};

export type UserExtraStackInput = {
  /** Stack NFT */
  nft?: InputMaybe<NftInputType>;
  /** NFT Id */
  nftId: Scalars['Int']['input'];
  /** Stack Owner */
  user?: InputMaybe<UserInputType>;
  /** User Id */
  userId: Scalars['Int']['input'];
};

export type UserHistory = {
  __typename?: 'UserHistory';
  /** Amount */
  amount?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Detail History Type */
  detailType?: Maybe<Scalars['String']['output']>;
  /** Event Gold */
  eventGold?: Maybe<EventGold>;
  /** Event Gold Id */
  eventGoldId?: Maybe<Scalars['Int']['output']>;
  /** Event Silver */
  eventSilver?: Maybe<EventSilver>;
  /** Event Silver Id */
  eventSilverId?: Maybe<Scalars['Int']['output']>;
  /** From User */
  from?: Maybe<User>;
  /** From User Id */
  fromId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Link */
  link?: Maybe<Scalars['String']['output']>;
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NFT */
  nft?: Maybe<Nft>;
  /** NFT Id */
  nftId?: Maybe<Scalars['Int']['output']>;
  /** Payment */
  payment?: Maybe<Payment>;
  /** Payment Id */
  paymentId?: Maybe<Scalars['Int']['output']>;
  /** To User */
  to?: Maybe<User>;
  /** To User Id */
  toId?: Maybe<Scalars['Int']['output']>;
  /** History Type */
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** History Owner User */
  user?: Maybe<User>;
  /** History Owner Id */
  userId?: Maybe<Scalars['Int']['output']>;
  /** Whitelist */
  whitelist?: Maybe<Whitelist>;
  /** Whitelist Id */
  whitelistId?: Maybe<Scalars['Int']['output']>;
};

/** 히스토리  */
export type UserHistoryInputType = {
  /** Amount */
  amount?: InputMaybe<Scalars['String']['input']>;
  /** Detail History Type */
  detailType?: InputMaybe<Scalars['String']['input']>;
  /** Event Gold */
  eventGold?: InputMaybe<EventGoldInput>;
  /** Event Gold Id */
  eventGoldId?: InputMaybe<Scalars['Int']['input']>;
  /** Event Silver */
  eventSilver?: InputMaybe<EventSilverInput>;
  /** Event Silver Id */
  eventSilverId?: InputMaybe<Scalars['Int']['input']>;
  /** From User */
  from?: InputMaybe<UserInputType>;
  /** From User Id */
  fromId?: InputMaybe<Scalars['Int']['input']>;
  /** Link */
  link?: InputMaybe<Scalars['String']['input']>;
  /** Message */
  message?: InputMaybe<Scalars['String']['input']>;
  /** NFT */
  nft?: InputMaybe<NftInputType>;
  /** NFT Id */
  nftId?: InputMaybe<Scalars['Int']['input']>;
  /** Payment */
  payment?: InputMaybe<PaymentInputType>;
  /** Payment Id */
  paymentId?: InputMaybe<Scalars['Int']['input']>;
  /** To User */
  to?: InputMaybe<UserInputType>;
  /** To User Id */
  toId?: InputMaybe<Scalars['Int']['input']>;
  /** History Type */
  type?: InputMaybe<Scalars['String']['input']>;
  /** History Owner User */
  user?: InputMaybe<UserInputType>;
  /** History Owner Id */
  userId?: InputMaybe<Scalars['Int']['input']>;
  /** Whitelist */
  whitelist?: InputMaybe<WhitelistInputType>;
  /** Whitelist Id */
  whitelistId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserInputType = {
  /** wallet address */
  address?: InputMaybe<Scalars['String']['input']>;
  /** 출금 가능 금액 */
  available_amount?: InputMaybe<Scalars['String']['input']>;
  /** 사용자 잔액 */
  balance?: InputMaybe<Scalars['String']['input']>;
  /** 국가코드 */
  countryCode?: InputMaybe<Scalars['String']['input']>;
  /** email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** KYC 인증 여부 */
  isKYCVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /** SNS 인증 여부 */
  isSNSVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /** 선구매자 여부 */
  isWhitelist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Nickname */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** 폰넘버 */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Postal Code */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Profile Image */
  profileImage?: InputMaybe<Scalars['String']['input']>;
  /** 사용자 리워드 잔액 */
  reward_balance?: InputMaybe<Scalars['String']['input']>;
  /** Whitelist */
  whitelist?: InputMaybe<WhitelistInputType>;
};

export type UserKyc = {
  __typename?: 'UserKYC';
  /** 통장 번호 */
  bankAccountNumber?: Maybe<Scalars['String']['output']>;
  /** 통장 은행 */
  bankName?: Maybe<Scalars['String']['output']>;
  /** 통장 사본 */
  bankStatementImage?: Maybe<Scalars['String']['output']>;
  /** 도시 */
  city?: Maybe<Scalars['String']['output']>;
  /** 국가 */
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** 생년월일 */
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 문서 뒷면 이미지 */
  documentBackImage?: Maybe<Scalars['String']['output']>;
  /** 문서 앞면 이미지 */
  documentFrontImage?: Maybe<Scalars['String']['output']>;
  /** 문서 발행 국가코드 */
  documentIssueCountryCode?: Maybe<Scalars['String']['output']>;
  /** 문서 유형 */
  documentType?: Maybe<UserKycDocumentType>;
  /** 이름 (성) */
  firstName?: Maybe<Scalars['String']['output']>;
  /** 집 주소 */
  homeAddress?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** 이름 (이름) */
  lastName?: Maybe<Scalars['String']['output']>;
  /** 우편번호 */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Reject Message */
  rejectMessage?: Maybe<Scalars['String']['output']>;
  /** 거주지 주소 */
  residentialAddress?: Maybe<Scalars['String']['output']>;
  /** 상태 */
  status?: Maybe<UserKycStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User Id */
  userId?: Maybe<Scalars['Int']['output']>;
};

export enum UserKycDocumentType {
  DriverLicense = 'DRIVER_LICENSE',
  IdCard = 'ID_CARD',
  Other = 'OTHER',
  Passport = 'PASSPORT',
  ResidencePermit = 'RESIDENCE_PERMIT'
}

export type UserKycInput = {
  /** 통장 번호 */
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  /** 통장 은행 */
  bankName?: InputMaybe<Scalars['String']['input']>;
  /** 통장 사본 */
  bankStatementImage?: InputMaybe<Scalars['String']['input']>;
  /** 도시 */
  city?: InputMaybe<Scalars['String']['input']>;
  /** 국가 */
  country?: InputMaybe<Scalars['String']['input']>;
  /** 생년월일 */
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  /** 문서 뒷면 이미지 */
  documentBackImage?: InputMaybe<Scalars['String']['input']>;
  /** 문서 앞면 이미지 */
  documentFrontImage?: InputMaybe<Scalars['String']['input']>;
  /** 문서 발행 국가코드 */
  documentIssueCountryCode?: InputMaybe<Scalars['String']['input']>;
  /** 문서 유형 */
  documentType?: InputMaybe<UserKycDocumentType>;
  /** 이름 (성) */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** 집 주소 */
  homeAddress?: InputMaybe<Scalars['String']['input']>;
  /** 이름 (이름) */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** 우편번호 */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Reject Message */
  rejectMessage?: InputMaybe<Scalars['String']['input']>;
  /** 거주지 주소 */
  residentialAddress?: InputMaybe<Scalars['String']['input']>;
  /** 상태 */
  status?: InputMaybe<UserKycStatus>;
  /** User Id */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export enum UserKycStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type VerifyPasswordInput = {
  password: Scalars['String']['input'];
};

export type VerifyPasswordOutput = {
  __typename?: 'VerifyPasswordOutput';
  error?: Maybe<ErrorOutput>;
  verify?: Maybe<Scalars['Boolean']['output']>;
};

export type Whitelist = {
  __typename?: 'Whitelist';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** 현재 회차 남은 금액 */
  current_amount?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** email */
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** name */
  name?: Maybe<Scalars['String']['output']>;
  /** phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** 사용자 리워드 잔액 */
  reward_balance?: Maybe<Scalars['String']['output']>;
  /** 선구매 NFT 판매량 */
  sell_count?: Maybe<Scalars['Int']['output']>;
  /** 선구매 NFT 판매 상태 */
  sell_state?: Maybe<SellState>;
  /** 선구매 NFT 보유량 */
  total_count?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User Id */
  userId?: Maybe<Scalars['Int']['output']>;
};

export type WhitelistInputType = {
  /** 현재 회차 남은 금액 */
  current_amount?: InputMaybe<Scalars['Int']['input']>;
  /** email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** phone */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** 사용자 리워드 잔액 */
  reward_balance?: InputMaybe<Scalars['String']['input']>;
  /** 선구매 NFT 판매량 */
  sell_count?: InputMaybe<Scalars['Int']['input']>;
  /** 선구매 NFT 판매 상태 */
  sell_state?: InputMaybe<SellState>;
  /** 선구매 NFT 보유량 */
  total_count?: InputMaybe<Scalars['Int']['input']>;
  /** User Id */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type AuthSmsSendMutationVariables = Exact<{
  input: AuthSmsSendInput;
}>;


export type AuthSmsSendMutation = { __typename?: 'Mutation', authSMSSend: { __typename?: 'AuthSMSSendOutput', success?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type AuthSmsVerifyMutationVariables = Exact<{
  input: AuthSmsVerifyInput;
}>;


export type AuthSmsVerifyMutation = { __typename?: 'Mutation', authSMSVerify: { __typename?: 'AuthSMSVerifyOutput', success?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type AuthMailVerifyQueryVariables = Exact<{
  input: AuthMailVerifyInput;
}>;


export type AuthMailVerifyQuery = { __typename?: 'Query', authMailVerify: { __typename?: 'AuthMailVerifyOutput', success: boolean, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type AuthMailSendMutationVariables = Exact<{
  input: AuthMailSendInput;
}>;


export type AuthMailSendMutation = { __typename?: 'Mutation', authMailSend: { __typename?: 'AuthMailSendOutput', success: boolean, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type NicknameVerifyQueryVariables = Exact<{
  input: NicknameVerifyInput;
}>;


export type NicknameVerifyQuery = { __typename?: 'Query', nicknameVerify: { __typename?: 'NicknameVerifyOutput', success: boolean, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'SignUpOutput', id?: number | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', access_token?: string | null, user?: { __typename?: 'User', id?: number | null, nickname?: string | null, email?: string | null, profileImage?: string | null, phoneNumber?: string | null, countryCode?: string | null, createdAt?: any | null, available_amount?: string | null } | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type AuthFindSmsSendMutationVariables = Exact<{
  input: AuthFindSmsSendInput;
}>;


export type AuthFindSmsSendMutation = { __typename?: 'Mutation', authFindSMSSend: { __typename?: 'AuthFindSMSSendOutput', success?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type AuthFindSmsVerifyMutationVariables = Exact<{
  input: AuthFindSmsVerifyInput;
}>;


export type AuthFindSmsVerifyMutation = { __typename?: 'Mutation', authFindSMSVerify: { __typename?: 'AuthFindSMSVerifyOutput', success?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type AuthFindNewPasswordMutationVariables = Exact<{
  input: AuthFindNewPasswordInput;
}>;


export type AuthFindNewPasswordMutation = { __typename?: 'Mutation', authFindNewPassword: { __typename?: 'AuthFindNewPasswordOutput', success?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type AuthVerifyQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthVerifyQuery = { __typename?: 'Query', authVerify: { __typename?: 'AuthVerifyOutput', isVerified?: boolean | null, user?: { __typename?: 'User', id?: number | null, nickname?: string | null, email?: string | null, profileImage?: string | null, phoneNumber?: string | null, countryCode?: string | null, createdAt?: any | null, available_amount?: string | null, isWhitelist?: boolean | null, balance?: string | null, reward_balance?: string | null, isKYCVerified?: boolean | null, whitelist?: { __typename?: 'Whitelist', total_count?: number | null } | null } | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type AuthFindEmailQueryVariables = Exact<{
  input: AuthFindEmailInput;
}>;


export type AuthFindEmailQuery = { __typename?: 'Query', authFindEmail: { __typename?: 'AuthFindEmailOutput', user?: { __typename?: 'User', email?: string | null, createdAt?: any | null } | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type AuthMailResetUrlQueryVariables = Exact<{
  input: AuthMailResetUrlInput;
}>;


export type AuthMailResetUrlQuery = { __typename?: 'Query', authMailResetURL: { __typename?: 'AuthMailResetURLOutput', success?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type AuthTokenVerifyQueryVariables = Exact<{
  input: AuthTokenVerifyInput;
}>;


export type AuthTokenVerifyQuery = { __typename?: 'Query', authTokenVerify: { __typename?: 'AuthTokenVerifyOutput', verify?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type OpenGoldEggMutationVariables = Exact<{
  input: OpenGoldEggInput;
}>;


export type OpenGoldEggMutation = { __typename?: 'Mutation', openGoldEgg: { __typename?: 'OpenGoldEggOutput', isSuccess?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type OpenSilverEggMutationVariables = Exact<{
  input: OpenSilverEggInput;
}>;


export type OpenSilverEggMutation = { __typename?: 'Mutation', openSilverEgg: { __typename?: 'OpenSilverEggOutput', isSuccess?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetTotalSaleAmountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalSaleAmountQuery = { __typename?: 'Query', getTotalSaleAmount: { __typename?: 'GetTotalSaleAmountOutput', totalSaleAmount?: number | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetNftByOwnerIdQueryVariables = Exact<{
  input: GetNftByOwnerIdInput;
}>;


export type GetNftByOwnerIdQuery = { __typename?: 'Query', getNFTByOwnerId: { __typename?: 'GetNFTByOwnerIdOutput', total?: number | null, page?: number | null, pageSize?: number | null, nfts?: Array<{ __typename?: 'NFT', id?: number | null, tokenId?: number | null, tokenURI?: string | null, price?: string | null, tradeCount?: number | null, isOnSale?: NftIsOnSale | null, state: NftState, createdAt?: any | null, owner?: { __typename?: 'User', profileImage?: string | null, nickname?: string | null } | null, metadata?: { __typename?: 'Metadata', name?: string | null, description?: string | null, image?: string | null } | null }> | null, silvers?: Array<{ __typename?: 'EventSilver', id?: number | null, createdAt?: any | null }> | null, golds?: Array<{ __typename?: 'EventGold', id?: number | null, createdAt?: any | null }> | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetBlockNumberQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlockNumberQuery = { __typename?: 'Query', getBlockNumber: { __typename?: 'GetBlockNumberOutput', value?: string | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetNftPriceCapQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNftPriceCapQuery = { __typename?: 'Query', getNFTPriceCap: { __typename?: 'GetTotalPriceCapOutput', nftPriceCap?: Array<{ __typename?: 'NFTPriceCap', price: number, currentCap: number, maxCap: number }> | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetNftByIdQueryVariables = Exact<{
  input: GetNftByIdInput;
}>;


export type GetNftByIdQuery = { __typename?: 'Query', getNFTById: { __typename?: 'GetNFTByIdOutput', nft?: { __typename?: 'NFT', id?: number | null, tokenId?: number | null, tokenURI?: string | null, price?: string | null, tradeCount?: number | null, isOnSale?: NftIsOnSale | null, state: NftState, createdAt?: any | null, owner?: { __typename?: 'User', id?: number | null, profileImage?: string | null, nickname?: string | null } | null, metadata?: { __typename?: 'Metadata', name?: string | null, description?: string | null, image?: string | null } | null, history?: Array<{ __typename?: 'UserHistory', amount?: string | null, createdAt?: any | null, user?: { __typename?: 'User', profileImage?: string | null, nickname?: string | null } | null }> | null } | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type UpdateNftSaleMutationVariables = Exact<{
  input: UpdateNftSaleInput;
}>;


export type UpdateNftSaleMutation = { __typename?: 'Mutation', updateNFTSale: { __typename?: 'UpdateNFTSaleOutput', success?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetMainNftListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainNftListQuery = { __typename?: 'Query', getMainNFTList: { __typename?: 'GetMainNFWListOutput', onSaleNFTList?: Array<{ __typename?: 'NFT', id?: number | null, tokenId?: number | null, tokenURI?: string | null, price?: string | null, tradeCount?: number | null, isOnSale?: NftIsOnSale | null, state: NftState, createdAt?: any | null, owner?: { __typename?: 'User', profileImage?: string | null, nickname?: string | null } | null, metadata?: { __typename?: 'Metadata', name?: string | null, description?: string | null, image?: string | null } | null }> | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetNftListQueryVariables = Exact<{
  input: GetNftListInput;
}>;


export type GetNftListQuery = { __typename?: 'Query', getNFTList: { __typename?: 'GetNFTListOutput', total?: number | null, page?: number | null, pageSize?: number | null, nfts?: Array<{ __typename?: 'NFT', id?: number | null, tokenId?: number | null, tokenURI?: string | null, price?: string | null, tradeCount?: number | null, isOnSale?: NftIsOnSale | null, state: NftState, createdAt?: any | null, owner?: { __typename?: 'User', profileImage?: string | null, nickname?: string | null } | null, metadata?: { __typename?: 'Metadata', name?: string | null, description?: string | null, image?: string | null } | null }> | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type CheckOutOrderMutationVariables = Exact<{
  input: CheckOutOrderInput;
}>;


export type CheckOutOrderMutation = { __typename?: 'Mutation', checkOutOrder: { __typename?: 'CheckOutOrderOutput', success?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type CreateMintOrderMutationVariables = Exact<{
  input: CreateMintOrderInput;
}>;


export type CreateMintOrderMutation = { __typename?: 'Mutation', createMintOrder: { __typename?: 'CreateMintOrderOutput', orderId?: string | null, approveUrl?: string | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetPaymentStateQueryVariables = Exact<{
  input: GetPaymentStateInput;
}>;


export type GetPaymentStateQuery = { __typename?: 'Query', getPaymentState: { __typename?: 'GetPaymentStateOutput', payment?: { __typename?: 'Payment', status: PaymentStatus } | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type CreateWithdrawRequestMutationVariables = Exact<{
  input: CreateWithdrawRequestInput;
}>;


export type CreateWithdrawRequestMutation = { __typename?: 'Mutation', createWithdrawRequest: { __typename?: 'CreateWithdrawRequestOutput', isSuccess?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetCurrencyExchangeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrencyExchangeQuery = { __typename?: 'Query', getCurrencyExchange: { __typename?: 'GetCurrencyExchangeOutput', currencyExchange?: { __typename?: 'CurrencyExchange', value?: string | null } | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type CreateBuyOrderMutationVariables = Exact<{
  input: CreateBuyOrderInput;
}>;


export type CreateBuyOrderMutation = { __typename?: 'Mutation', createBuyOrder: { __typename?: 'CreateBuyOrderOutput', orderId?: string | null, approveUrl?: string | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetDirectDepositPaymentQueryVariables = Exact<{
  input: GetPaymentStateInput;
}>;


export type GetDirectDepositPaymentQuery = { __typename?: 'Query', getPaymentState: { __typename?: 'GetPaymentStateOutput', payment?: { __typename?: 'Payment', depositorName?: string | null, totalAmount?: number | null } | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetUserQueryVariables = Exact<{
  input: GetUserInput;
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'GetUserOutput', user?: { __typename?: 'User', id?: number | null, email?: string | null, nickname?: string | null, password?: string | null, createdAt?: any | null, phoneNumber?: string | null, profileImage?: string | null, countryCode?: string | null, available_amount?: string | null } | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type EditUserMutationVariables = Exact<{
  input: EditUserInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser: { __typename?: 'EditUserOutput', user?: { __typename?: 'User', email?: string | null, nickname?: string | null, countryCode?: string | null } | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type FindUserByNicknameQueryVariables = Exact<{
  input: FindUserByNicknameInput;
}>;


export type FindUserByNicknameQuery = { __typename?: 'Query', findUserByNickname: { __typename?: 'FindUserByNicknameOutput', user?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type VerifyPasswordQueryVariables = Exact<{
  input: VerifyPasswordInput;
}>;


export type VerifyPasswordQuery = { __typename?: 'Query', verifyPassword: { __typename?: 'VerifyPasswordOutput', verify?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type OnRegisterKycMutationVariables = Exact<{
  input: OnRegisterKycInput;
}>;


export type OnRegisterKycMutation = { __typename?: 'Mutation', onRegisterKYC: { __typename?: 'OnRegisterKYCOutput', success?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type OnUploadKycImageMutationVariables = Exact<{
  input: OnUploadKycImageInput;
}>;


export type OnUploadKycImageMutation = { __typename?: 'Mutation', onUploadKYCImage: { __typename?: 'OnUploadKYCImageOutput', url?: string | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetKycQueryVariables = Exact<{ [key: string]: never; }>;


export type GetKycQuery = { __typename?: 'Query', getKYC: { __typename?: 'GetKycOutput', kyc?: { __typename?: 'UserKYC', id?: number | null, userId?: number | null, status?: UserKycStatus | null, createdAt?: any | null, updatedAt?: any | null } | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type OnUpdateSnsVerifyMutationVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateSnsVerifyMutation = { __typename?: 'Mutation', onUpdateSNSVerify: { __typename?: 'OnUpdateSNSVerifyOutput', success?: boolean | null, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type OnStartExtraStackMutationVariables = Exact<{ [key: string]: never; }>;


export type OnStartExtraStackMutation = { __typename?: 'Mutation', onStartExtraStack: { __typename?: 'OnStartExtraStackOutput', success: boolean, error?: { __typename?: 'ErrorOutput', code?: string | null, message?: string | null } | null } };

export type GetUserHistoryByUserIdQueryVariables = Exact<{
  input: GetUserHistoryByIdInput;
}>;


export type GetUserHistoryByUserIdQuery = { __typename?: 'Query', getUserHistoryByUserId: { __typename?: 'GetUserHistoryByIdOutput', total?: number | null, page?: number | null, pageSize?: number | null, histories?: Array<{ __typename?: 'UserHistory', id?: number | null, amount?: string | null, detailType?: string | null, message?: string | null, createdAt?: any | null, from?: { __typename?: 'User', nickname?: string | null } | null, to?: { __typename?: 'User', nickname?: string | null } | null, nft?: { __typename?: 'NFT', state: NftState, tokenId?: number | null, metadata?: { __typename?: 'Metadata', name?: string | null, description?: string | null, image?: string | null } | null } | null }> | null } };


export const AuthSmsSendDocument = gql`
    mutation authSMSSend($input: AuthSMSSendInput!) {
  authSMSSend(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;
export type AuthSmsSendMutationFn = Apollo.MutationFunction<AuthSmsSendMutation, AuthSmsSendMutationVariables>;

/**
 * __useAuthSmsSendMutation__
 *
 * To run a mutation, you first call `useAuthSmsSendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthSmsSendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authSmsSendMutation, { data, loading, error }] = useAuthSmsSendMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthSmsSendMutation(baseOptions?: Apollo.MutationHookOptions<AuthSmsSendMutation, AuthSmsSendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthSmsSendMutation, AuthSmsSendMutationVariables>(AuthSmsSendDocument, options);
      }
export type AuthSmsSendMutationHookResult = ReturnType<typeof useAuthSmsSendMutation>;
export type AuthSmsSendMutationResult = Apollo.MutationResult<AuthSmsSendMutation>;
export type AuthSmsSendMutationOptions = Apollo.BaseMutationOptions<AuthSmsSendMutation, AuthSmsSendMutationVariables>;
export const AuthSmsVerifyDocument = gql`
    mutation authSMSVerify($input: AuthSMSVerifyInput!) {
  authSMSVerify(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;
export type AuthSmsVerifyMutationFn = Apollo.MutationFunction<AuthSmsVerifyMutation, AuthSmsVerifyMutationVariables>;

/**
 * __useAuthSmsVerifyMutation__
 *
 * To run a mutation, you first call `useAuthSmsVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthSmsVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authSmsVerifyMutation, { data, loading, error }] = useAuthSmsVerifyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthSmsVerifyMutation(baseOptions?: Apollo.MutationHookOptions<AuthSmsVerifyMutation, AuthSmsVerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthSmsVerifyMutation, AuthSmsVerifyMutationVariables>(AuthSmsVerifyDocument, options);
      }
export type AuthSmsVerifyMutationHookResult = ReturnType<typeof useAuthSmsVerifyMutation>;
export type AuthSmsVerifyMutationResult = Apollo.MutationResult<AuthSmsVerifyMutation>;
export type AuthSmsVerifyMutationOptions = Apollo.BaseMutationOptions<AuthSmsVerifyMutation, AuthSmsVerifyMutationVariables>;
export const AuthMailVerifyDocument = gql`
    query authMailVerify($input: AuthMailVerifyInput!) {
  authMailVerify(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useAuthMailVerifyQuery__
 *
 * To run a query within a React component, call `useAuthMailVerifyQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthMailVerifyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthMailVerifyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthMailVerifyQuery(baseOptions: Apollo.QueryHookOptions<AuthMailVerifyQuery, AuthMailVerifyQueryVariables> & ({ variables: AuthMailVerifyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthMailVerifyQuery, AuthMailVerifyQueryVariables>(AuthMailVerifyDocument, options);
      }
export function useAuthMailVerifyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthMailVerifyQuery, AuthMailVerifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthMailVerifyQuery, AuthMailVerifyQueryVariables>(AuthMailVerifyDocument, options);
        }
export function useAuthMailVerifySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AuthMailVerifyQuery, AuthMailVerifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthMailVerifyQuery, AuthMailVerifyQueryVariables>(AuthMailVerifyDocument, options);
        }
export type AuthMailVerifyQueryHookResult = ReturnType<typeof useAuthMailVerifyQuery>;
export type AuthMailVerifyLazyQueryHookResult = ReturnType<typeof useAuthMailVerifyLazyQuery>;
export type AuthMailVerifySuspenseQueryHookResult = ReturnType<typeof useAuthMailVerifySuspenseQuery>;
export type AuthMailVerifyQueryResult = Apollo.QueryResult<AuthMailVerifyQuery, AuthMailVerifyQueryVariables>;
export const AuthMailSendDocument = gql`
    mutation authMailSend($input: AuthMailSendInput!) {
  authMailSend(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;
export type AuthMailSendMutationFn = Apollo.MutationFunction<AuthMailSendMutation, AuthMailSendMutationVariables>;

/**
 * __useAuthMailSendMutation__
 *
 * To run a mutation, you first call `useAuthMailSendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMailSendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMailSendMutation, { data, loading, error }] = useAuthMailSendMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthMailSendMutation(baseOptions?: Apollo.MutationHookOptions<AuthMailSendMutation, AuthMailSendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthMailSendMutation, AuthMailSendMutationVariables>(AuthMailSendDocument, options);
      }
export type AuthMailSendMutationHookResult = ReturnType<typeof useAuthMailSendMutation>;
export type AuthMailSendMutationResult = Apollo.MutationResult<AuthMailSendMutation>;
export type AuthMailSendMutationOptions = Apollo.BaseMutationOptions<AuthMailSendMutation, AuthMailSendMutationVariables>;
export const NicknameVerifyDocument = gql`
    query nicknameVerify($input: NicknameVerifyInput!) {
  nicknameVerify(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useNicknameVerifyQuery__
 *
 * To run a query within a React component, call `useNicknameVerifyQuery` and pass it any options that fit your needs.
 * When your component renders, `useNicknameVerifyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNicknameVerifyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNicknameVerifyQuery(baseOptions: Apollo.QueryHookOptions<NicknameVerifyQuery, NicknameVerifyQueryVariables> & ({ variables: NicknameVerifyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NicknameVerifyQuery, NicknameVerifyQueryVariables>(NicknameVerifyDocument, options);
      }
export function useNicknameVerifyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NicknameVerifyQuery, NicknameVerifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NicknameVerifyQuery, NicknameVerifyQueryVariables>(NicknameVerifyDocument, options);
        }
export function useNicknameVerifySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<NicknameVerifyQuery, NicknameVerifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<NicknameVerifyQuery, NicknameVerifyQueryVariables>(NicknameVerifyDocument, options);
        }
export type NicknameVerifyQueryHookResult = ReturnType<typeof useNicknameVerifyQuery>;
export type NicknameVerifyLazyQueryHookResult = ReturnType<typeof useNicknameVerifyLazyQuery>;
export type NicknameVerifySuspenseQueryHookResult = ReturnType<typeof useNicknameVerifySuspenseQuery>;
export type NicknameVerifyQueryResult = Apollo.QueryResult<NicknameVerifyQuery, NicknameVerifyQueryVariables>;
export const SignUpDocument = gql`
    mutation signUp($input: SignUpInput!) {
  signUp(input: $input) {
    id
    error {
      code
      message
    }
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    access_token
    user {
      id
      nickname
      email
      profileImage
      phoneNumber
      countryCode
      createdAt
      available_amount
    }
    error {
      code
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const AuthFindSmsSendDocument = gql`
    mutation authFindSMSSend($input: AuthFindSMSSendInput!) {
  authFindSMSSend(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;
export type AuthFindSmsSendMutationFn = Apollo.MutationFunction<AuthFindSmsSendMutation, AuthFindSmsSendMutationVariables>;

/**
 * __useAuthFindSmsSendMutation__
 *
 * To run a mutation, you first call `useAuthFindSmsSendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthFindSmsSendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authFindSmsSendMutation, { data, loading, error }] = useAuthFindSmsSendMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthFindSmsSendMutation(baseOptions?: Apollo.MutationHookOptions<AuthFindSmsSendMutation, AuthFindSmsSendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthFindSmsSendMutation, AuthFindSmsSendMutationVariables>(AuthFindSmsSendDocument, options);
      }
export type AuthFindSmsSendMutationHookResult = ReturnType<typeof useAuthFindSmsSendMutation>;
export type AuthFindSmsSendMutationResult = Apollo.MutationResult<AuthFindSmsSendMutation>;
export type AuthFindSmsSendMutationOptions = Apollo.BaseMutationOptions<AuthFindSmsSendMutation, AuthFindSmsSendMutationVariables>;
export const AuthFindSmsVerifyDocument = gql`
    mutation authFindSMSVerify($input: AuthFindSMSVerifyInput!) {
  authFindSMSVerify(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;
export type AuthFindSmsVerifyMutationFn = Apollo.MutationFunction<AuthFindSmsVerifyMutation, AuthFindSmsVerifyMutationVariables>;

/**
 * __useAuthFindSmsVerifyMutation__
 *
 * To run a mutation, you first call `useAuthFindSmsVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthFindSmsVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authFindSmsVerifyMutation, { data, loading, error }] = useAuthFindSmsVerifyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthFindSmsVerifyMutation(baseOptions?: Apollo.MutationHookOptions<AuthFindSmsVerifyMutation, AuthFindSmsVerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthFindSmsVerifyMutation, AuthFindSmsVerifyMutationVariables>(AuthFindSmsVerifyDocument, options);
      }
export type AuthFindSmsVerifyMutationHookResult = ReturnType<typeof useAuthFindSmsVerifyMutation>;
export type AuthFindSmsVerifyMutationResult = Apollo.MutationResult<AuthFindSmsVerifyMutation>;
export type AuthFindSmsVerifyMutationOptions = Apollo.BaseMutationOptions<AuthFindSmsVerifyMutation, AuthFindSmsVerifyMutationVariables>;
export const AuthFindNewPasswordDocument = gql`
    mutation authFindNewPassword($input: AuthFindNewPasswordInput!) {
  authFindNewPassword(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;
export type AuthFindNewPasswordMutationFn = Apollo.MutationFunction<AuthFindNewPasswordMutation, AuthFindNewPasswordMutationVariables>;

/**
 * __useAuthFindNewPasswordMutation__
 *
 * To run a mutation, you first call `useAuthFindNewPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthFindNewPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authFindNewPasswordMutation, { data, loading, error }] = useAuthFindNewPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthFindNewPasswordMutation(baseOptions?: Apollo.MutationHookOptions<AuthFindNewPasswordMutation, AuthFindNewPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthFindNewPasswordMutation, AuthFindNewPasswordMutationVariables>(AuthFindNewPasswordDocument, options);
      }
export type AuthFindNewPasswordMutationHookResult = ReturnType<typeof useAuthFindNewPasswordMutation>;
export type AuthFindNewPasswordMutationResult = Apollo.MutationResult<AuthFindNewPasswordMutation>;
export type AuthFindNewPasswordMutationOptions = Apollo.BaseMutationOptions<AuthFindNewPasswordMutation, AuthFindNewPasswordMutationVariables>;
export const AuthVerifyDocument = gql`
    query authVerify {
  authVerify {
    isVerified
    user {
      id
      nickname
      email
      profileImage
      phoneNumber
      countryCode
      createdAt
      available_amount
      isWhitelist
      balance
      reward_balance
      isKYCVerified
      whitelist {
        total_count
      }
    }
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useAuthVerifyQuery__
 *
 * To run a query within a React component, call `useAuthVerifyQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthVerifyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthVerifyQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthVerifyQuery(baseOptions?: Apollo.QueryHookOptions<AuthVerifyQuery, AuthVerifyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthVerifyQuery, AuthVerifyQueryVariables>(AuthVerifyDocument, options);
      }
export function useAuthVerifyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthVerifyQuery, AuthVerifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthVerifyQuery, AuthVerifyQueryVariables>(AuthVerifyDocument, options);
        }
export function useAuthVerifySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AuthVerifyQuery, AuthVerifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthVerifyQuery, AuthVerifyQueryVariables>(AuthVerifyDocument, options);
        }
export type AuthVerifyQueryHookResult = ReturnType<typeof useAuthVerifyQuery>;
export type AuthVerifyLazyQueryHookResult = ReturnType<typeof useAuthVerifyLazyQuery>;
export type AuthVerifySuspenseQueryHookResult = ReturnType<typeof useAuthVerifySuspenseQuery>;
export type AuthVerifyQueryResult = Apollo.QueryResult<AuthVerifyQuery, AuthVerifyQueryVariables>;
export const AuthFindEmailDocument = gql`
    query authFindEmail($input: AuthFindEmailInput!) {
  authFindEmail(input: $input) {
    user {
      email
      createdAt
    }
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useAuthFindEmailQuery__
 *
 * To run a query within a React component, call `useAuthFindEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthFindEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthFindEmailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthFindEmailQuery(baseOptions: Apollo.QueryHookOptions<AuthFindEmailQuery, AuthFindEmailQueryVariables> & ({ variables: AuthFindEmailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthFindEmailQuery, AuthFindEmailQueryVariables>(AuthFindEmailDocument, options);
      }
export function useAuthFindEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthFindEmailQuery, AuthFindEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthFindEmailQuery, AuthFindEmailQueryVariables>(AuthFindEmailDocument, options);
        }
export function useAuthFindEmailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AuthFindEmailQuery, AuthFindEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthFindEmailQuery, AuthFindEmailQueryVariables>(AuthFindEmailDocument, options);
        }
export type AuthFindEmailQueryHookResult = ReturnType<typeof useAuthFindEmailQuery>;
export type AuthFindEmailLazyQueryHookResult = ReturnType<typeof useAuthFindEmailLazyQuery>;
export type AuthFindEmailSuspenseQueryHookResult = ReturnType<typeof useAuthFindEmailSuspenseQuery>;
export type AuthFindEmailQueryResult = Apollo.QueryResult<AuthFindEmailQuery, AuthFindEmailQueryVariables>;
export const AuthMailResetUrlDocument = gql`
    query authMailResetURL($input: AuthMailResetURLInput!) {
  authMailResetURL(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useAuthMailResetUrlQuery__
 *
 * To run a query within a React component, call `useAuthMailResetUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthMailResetUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthMailResetUrlQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthMailResetUrlQuery(baseOptions: Apollo.QueryHookOptions<AuthMailResetUrlQuery, AuthMailResetUrlQueryVariables> & ({ variables: AuthMailResetUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthMailResetUrlQuery, AuthMailResetUrlQueryVariables>(AuthMailResetUrlDocument, options);
      }
export function useAuthMailResetUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthMailResetUrlQuery, AuthMailResetUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthMailResetUrlQuery, AuthMailResetUrlQueryVariables>(AuthMailResetUrlDocument, options);
        }
export function useAuthMailResetUrlSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AuthMailResetUrlQuery, AuthMailResetUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthMailResetUrlQuery, AuthMailResetUrlQueryVariables>(AuthMailResetUrlDocument, options);
        }
export type AuthMailResetUrlQueryHookResult = ReturnType<typeof useAuthMailResetUrlQuery>;
export type AuthMailResetUrlLazyQueryHookResult = ReturnType<typeof useAuthMailResetUrlLazyQuery>;
export type AuthMailResetUrlSuspenseQueryHookResult = ReturnType<typeof useAuthMailResetUrlSuspenseQuery>;
export type AuthMailResetUrlQueryResult = Apollo.QueryResult<AuthMailResetUrlQuery, AuthMailResetUrlQueryVariables>;
export const AuthTokenVerifyDocument = gql`
    query authTokenVerify($input: AuthTokenVerifyInput!) {
  authTokenVerify(input: $input) {
    verify
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useAuthTokenVerifyQuery__
 *
 * To run a query within a React component, call `useAuthTokenVerifyQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthTokenVerifyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthTokenVerifyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthTokenVerifyQuery(baseOptions: Apollo.QueryHookOptions<AuthTokenVerifyQuery, AuthTokenVerifyQueryVariables> & ({ variables: AuthTokenVerifyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthTokenVerifyQuery, AuthTokenVerifyQueryVariables>(AuthTokenVerifyDocument, options);
      }
export function useAuthTokenVerifyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthTokenVerifyQuery, AuthTokenVerifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthTokenVerifyQuery, AuthTokenVerifyQueryVariables>(AuthTokenVerifyDocument, options);
        }
export function useAuthTokenVerifySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AuthTokenVerifyQuery, AuthTokenVerifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthTokenVerifyQuery, AuthTokenVerifyQueryVariables>(AuthTokenVerifyDocument, options);
        }
export type AuthTokenVerifyQueryHookResult = ReturnType<typeof useAuthTokenVerifyQuery>;
export type AuthTokenVerifyLazyQueryHookResult = ReturnType<typeof useAuthTokenVerifyLazyQuery>;
export type AuthTokenVerifySuspenseQueryHookResult = ReturnType<typeof useAuthTokenVerifySuspenseQuery>;
export type AuthTokenVerifyQueryResult = Apollo.QueryResult<AuthTokenVerifyQuery, AuthTokenVerifyQueryVariables>;
export const OpenGoldEggDocument = gql`
    mutation openGoldEgg($input: OpenGoldEggInput!) {
  openGoldEgg(input: $input) {
    isSuccess
    error {
      code
      message
    }
  }
}
    `;
export type OpenGoldEggMutationFn = Apollo.MutationFunction<OpenGoldEggMutation, OpenGoldEggMutationVariables>;

/**
 * __useOpenGoldEggMutation__
 *
 * To run a mutation, you first call `useOpenGoldEggMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOpenGoldEggMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [openGoldEggMutation, { data, loading, error }] = useOpenGoldEggMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOpenGoldEggMutation(baseOptions?: Apollo.MutationHookOptions<OpenGoldEggMutation, OpenGoldEggMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OpenGoldEggMutation, OpenGoldEggMutationVariables>(OpenGoldEggDocument, options);
      }
export type OpenGoldEggMutationHookResult = ReturnType<typeof useOpenGoldEggMutation>;
export type OpenGoldEggMutationResult = Apollo.MutationResult<OpenGoldEggMutation>;
export type OpenGoldEggMutationOptions = Apollo.BaseMutationOptions<OpenGoldEggMutation, OpenGoldEggMutationVariables>;
export const OpenSilverEggDocument = gql`
    mutation openSilverEgg($input: OpenSilverEggInput!) {
  openSilverEgg(input: $input) {
    isSuccess
    error {
      code
      message
    }
  }
}
    `;
export type OpenSilverEggMutationFn = Apollo.MutationFunction<OpenSilverEggMutation, OpenSilverEggMutationVariables>;

/**
 * __useOpenSilverEggMutation__
 *
 * To run a mutation, you first call `useOpenSilverEggMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOpenSilverEggMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [openSilverEggMutation, { data, loading, error }] = useOpenSilverEggMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOpenSilverEggMutation(baseOptions?: Apollo.MutationHookOptions<OpenSilverEggMutation, OpenSilverEggMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OpenSilverEggMutation, OpenSilverEggMutationVariables>(OpenSilverEggDocument, options);
      }
export type OpenSilverEggMutationHookResult = ReturnType<typeof useOpenSilverEggMutation>;
export type OpenSilverEggMutationResult = Apollo.MutationResult<OpenSilverEggMutation>;
export type OpenSilverEggMutationOptions = Apollo.BaseMutationOptions<OpenSilverEggMutation, OpenSilverEggMutationVariables>;
export const GetTotalSaleAmountDocument = gql`
    query getTotalSaleAmount {
  getTotalSaleAmount {
    totalSaleAmount
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useGetTotalSaleAmountQuery__
 *
 * To run a query within a React component, call `useGetTotalSaleAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalSaleAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalSaleAmountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTotalSaleAmountQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalSaleAmountQuery, GetTotalSaleAmountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalSaleAmountQuery, GetTotalSaleAmountQueryVariables>(GetTotalSaleAmountDocument, options);
      }
export function useGetTotalSaleAmountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalSaleAmountQuery, GetTotalSaleAmountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalSaleAmountQuery, GetTotalSaleAmountQueryVariables>(GetTotalSaleAmountDocument, options);
        }
export function useGetTotalSaleAmountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalSaleAmountQuery, GetTotalSaleAmountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalSaleAmountQuery, GetTotalSaleAmountQueryVariables>(GetTotalSaleAmountDocument, options);
        }
export type GetTotalSaleAmountQueryHookResult = ReturnType<typeof useGetTotalSaleAmountQuery>;
export type GetTotalSaleAmountLazyQueryHookResult = ReturnType<typeof useGetTotalSaleAmountLazyQuery>;
export type GetTotalSaleAmountSuspenseQueryHookResult = ReturnType<typeof useGetTotalSaleAmountSuspenseQuery>;
export type GetTotalSaleAmountQueryResult = Apollo.QueryResult<GetTotalSaleAmountQuery, GetTotalSaleAmountQueryVariables>;
export const GetNftByOwnerIdDocument = gql`
    query getNFTByOwnerId($input: GetNFTByOwnerIdInput!) {
  getNFTByOwnerId(input: $input) {
    nfts {
      id
      tokenId
      tokenURI
      price
      tradeCount
      isOnSale
      state
      owner {
        profileImage
        nickname
      }
      metadata {
        name
        description
        image
      }
      createdAt
    }
    silvers {
      id
      createdAt
    }
    golds {
      id
      createdAt
    }
    error {
      code
      message
    }
    total
    page
    pageSize
  }
}
    `;

/**
 * __useGetNftByOwnerIdQuery__
 *
 * To run a query within a React component, call `useGetNftByOwnerIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNftByOwnerIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNftByOwnerIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetNftByOwnerIdQuery(baseOptions: Apollo.QueryHookOptions<GetNftByOwnerIdQuery, GetNftByOwnerIdQueryVariables> & ({ variables: GetNftByOwnerIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNftByOwnerIdQuery, GetNftByOwnerIdQueryVariables>(GetNftByOwnerIdDocument, options);
      }
export function useGetNftByOwnerIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNftByOwnerIdQuery, GetNftByOwnerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNftByOwnerIdQuery, GetNftByOwnerIdQueryVariables>(GetNftByOwnerIdDocument, options);
        }
export function useGetNftByOwnerIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNftByOwnerIdQuery, GetNftByOwnerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNftByOwnerIdQuery, GetNftByOwnerIdQueryVariables>(GetNftByOwnerIdDocument, options);
        }
export type GetNftByOwnerIdQueryHookResult = ReturnType<typeof useGetNftByOwnerIdQuery>;
export type GetNftByOwnerIdLazyQueryHookResult = ReturnType<typeof useGetNftByOwnerIdLazyQuery>;
export type GetNftByOwnerIdSuspenseQueryHookResult = ReturnType<typeof useGetNftByOwnerIdSuspenseQuery>;
export type GetNftByOwnerIdQueryResult = Apollo.QueryResult<GetNftByOwnerIdQuery, GetNftByOwnerIdQueryVariables>;
export const GetBlockNumberDocument = gql`
    query getBlockNumber {
  getBlockNumber {
    value
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useGetBlockNumberQuery__
 *
 * To run a query within a React component, call `useGetBlockNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlockNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlockNumberQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBlockNumberQuery(baseOptions?: Apollo.QueryHookOptions<GetBlockNumberQuery, GetBlockNumberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlockNumberQuery, GetBlockNumberQueryVariables>(GetBlockNumberDocument, options);
      }
export function useGetBlockNumberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlockNumberQuery, GetBlockNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlockNumberQuery, GetBlockNumberQueryVariables>(GetBlockNumberDocument, options);
        }
export function useGetBlockNumberSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlockNumberQuery, GetBlockNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlockNumberQuery, GetBlockNumberQueryVariables>(GetBlockNumberDocument, options);
        }
export type GetBlockNumberQueryHookResult = ReturnType<typeof useGetBlockNumberQuery>;
export type GetBlockNumberLazyQueryHookResult = ReturnType<typeof useGetBlockNumberLazyQuery>;
export type GetBlockNumberSuspenseQueryHookResult = ReturnType<typeof useGetBlockNumberSuspenseQuery>;
export type GetBlockNumberQueryResult = Apollo.QueryResult<GetBlockNumberQuery, GetBlockNumberQueryVariables>;
export const GetNftPriceCapDocument = gql`
    query getNFTPriceCap {
  getNFTPriceCap {
    nftPriceCap {
      price
      currentCap
      maxCap
    }
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useGetNftPriceCapQuery__
 *
 * To run a query within a React component, call `useGetNftPriceCapQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNftPriceCapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNftPriceCapQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNftPriceCapQuery(baseOptions?: Apollo.QueryHookOptions<GetNftPriceCapQuery, GetNftPriceCapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNftPriceCapQuery, GetNftPriceCapQueryVariables>(GetNftPriceCapDocument, options);
      }
export function useGetNftPriceCapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNftPriceCapQuery, GetNftPriceCapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNftPriceCapQuery, GetNftPriceCapQueryVariables>(GetNftPriceCapDocument, options);
        }
export function useGetNftPriceCapSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNftPriceCapQuery, GetNftPriceCapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNftPriceCapQuery, GetNftPriceCapQueryVariables>(GetNftPriceCapDocument, options);
        }
export type GetNftPriceCapQueryHookResult = ReturnType<typeof useGetNftPriceCapQuery>;
export type GetNftPriceCapLazyQueryHookResult = ReturnType<typeof useGetNftPriceCapLazyQuery>;
export type GetNftPriceCapSuspenseQueryHookResult = ReturnType<typeof useGetNftPriceCapSuspenseQuery>;
export type GetNftPriceCapQueryResult = Apollo.QueryResult<GetNftPriceCapQuery, GetNftPriceCapQueryVariables>;
export const GetNftByIdDocument = gql`
    query getNFTById($input: GetNFTByIdInput!) {
  getNFTById(input: $input) {
    nft {
      id
      tokenId
      tokenURI
      price
      tradeCount
      isOnSale
      state
      owner {
        id
        profileImage
        nickname
      }
      metadata {
        name
        description
        image
      }
      history {
        amount
        user {
          profileImage
          nickname
        }
        createdAt
      }
      createdAt
    }
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useGetNftByIdQuery__
 *
 * To run a query within a React component, call `useGetNftByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNftByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNftByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetNftByIdQuery(baseOptions: Apollo.QueryHookOptions<GetNftByIdQuery, GetNftByIdQueryVariables> & ({ variables: GetNftByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNftByIdQuery, GetNftByIdQueryVariables>(GetNftByIdDocument, options);
      }
export function useGetNftByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNftByIdQuery, GetNftByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNftByIdQuery, GetNftByIdQueryVariables>(GetNftByIdDocument, options);
        }
export function useGetNftByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNftByIdQuery, GetNftByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNftByIdQuery, GetNftByIdQueryVariables>(GetNftByIdDocument, options);
        }
export type GetNftByIdQueryHookResult = ReturnType<typeof useGetNftByIdQuery>;
export type GetNftByIdLazyQueryHookResult = ReturnType<typeof useGetNftByIdLazyQuery>;
export type GetNftByIdSuspenseQueryHookResult = ReturnType<typeof useGetNftByIdSuspenseQuery>;
export type GetNftByIdQueryResult = Apollo.QueryResult<GetNftByIdQuery, GetNftByIdQueryVariables>;
export const UpdateNftSaleDocument = gql`
    mutation updateNFTSale($input: UpdateNFTSaleInput!) {
  updateNFTSale(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;
export type UpdateNftSaleMutationFn = Apollo.MutationFunction<UpdateNftSaleMutation, UpdateNftSaleMutationVariables>;

/**
 * __useUpdateNftSaleMutation__
 *
 * To run a mutation, you first call `useUpdateNftSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNftSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNftSaleMutation, { data, loading, error }] = useUpdateNftSaleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNftSaleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNftSaleMutation, UpdateNftSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNftSaleMutation, UpdateNftSaleMutationVariables>(UpdateNftSaleDocument, options);
      }
export type UpdateNftSaleMutationHookResult = ReturnType<typeof useUpdateNftSaleMutation>;
export type UpdateNftSaleMutationResult = Apollo.MutationResult<UpdateNftSaleMutation>;
export type UpdateNftSaleMutationOptions = Apollo.BaseMutationOptions<UpdateNftSaleMutation, UpdateNftSaleMutationVariables>;
export const GetMainNftListDocument = gql`
    query getMainNFTList {
  getMainNFTList {
    onSaleNFTList {
      id
      tokenId
      tokenURI
      price
      tradeCount
      isOnSale
      state
      owner {
        profileImage
        nickname
      }
      metadata {
        name
        description
        image
      }
      createdAt
    }
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useGetMainNftListQuery__
 *
 * To run a query within a React component, call `useGetMainNftListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMainNftListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMainNftListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMainNftListQuery(baseOptions?: Apollo.QueryHookOptions<GetMainNftListQuery, GetMainNftListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMainNftListQuery, GetMainNftListQueryVariables>(GetMainNftListDocument, options);
      }
export function useGetMainNftListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMainNftListQuery, GetMainNftListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMainNftListQuery, GetMainNftListQueryVariables>(GetMainNftListDocument, options);
        }
export function useGetMainNftListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMainNftListQuery, GetMainNftListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMainNftListQuery, GetMainNftListQueryVariables>(GetMainNftListDocument, options);
        }
export type GetMainNftListQueryHookResult = ReturnType<typeof useGetMainNftListQuery>;
export type GetMainNftListLazyQueryHookResult = ReturnType<typeof useGetMainNftListLazyQuery>;
export type GetMainNftListSuspenseQueryHookResult = ReturnType<typeof useGetMainNftListSuspenseQuery>;
export type GetMainNftListQueryResult = Apollo.QueryResult<GetMainNftListQuery, GetMainNftListQueryVariables>;
export const GetNftListDocument = gql`
    query getNFTList($input: GetNFTListInput!) {
  getNFTList(input: $input) {
    nfts {
      id
      tokenId
      tokenURI
      price
      tradeCount
      isOnSale
      state
      owner {
        profileImage
        nickname
      }
      metadata {
        name
        description
        image
      }
      createdAt
    }
    error {
      code
      message
    }
    total
    page
    pageSize
  }
}
    `;

/**
 * __useGetNftListQuery__
 *
 * To run a query within a React component, call `useGetNftListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNftListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNftListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetNftListQuery(baseOptions: Apollo.QueryHookOptions<GetNftListQuery, GetNftListQueryVariables> & ({ variables: GetNftListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNftListQuery, GetNftListQueryVariables>(GetNftListDocument, options);
      }
export function useGetNftListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNftListQuery, GetNftListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNftListQuery, GetNftListQueryVariables>(GetNftListDocument, options);
        }
export function useGetNftListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNftListQuery, GetNftListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNftListQuery, GetNftListQueryVariables>(GetNftListDocument, options);
        }
export type GetNftListQueryHookResult = ReturnType<typeof useGetNftListQuery>;
export type GetNftListLazyQueryHookResult = ReturnType<typeof useGetNftListLazyQuery>;
export type GetNftListSuspenseQueryHookResult = ReturnType<typeof useGetNftListSuspenseQuery>;
export type GetNftListQueryResult = Apollo.QueryResult<GetNftListQuery, GetNftListQueryVariables>;
export const CheckOutOrderDocument = gql`
    mutation CheckOutOrder($input: CheckOutOrderInput!) {
  checkOutOrder(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;
export type CheckOutOrderMutationFn = Apollo.MutationFunction<CheckOutOrderMutation, CheckOutOrderMutationVariables>;

/**
 * __useCheckOutOrderMutation__
 *
 * To run a mutation, you first call `useCheckOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkOutOrderMutation, { data, loading, error }] = useCheckOutOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCheckOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<CheckOutOrderMutation, CheckOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckOutOrderMutation, CheckOutOrderMutationVariables>(CheckOutOrderDocument, options);
      }
export type CheckOutOrderMutationHookResult = ReturnType<typeof useCheckOutOrderMutation>;
export type CheckOutOrderMutationResult = Apollo.MutationResult<CheckOutOrderMutation>;
export type CheckOutOrderMutationOptions = Apollo.BaseMutationOptions<CheckOutOrderMutation, CheckOutOrderMutationVariables>;
export const CreateMintOrderDocument = gql`
    mutation createMintOrder($input: CreateMintOrderInput!) {
  createMintOrder(input: $input) {
    orderId
    approveUrl
    error {
      code
      message
    }
  }
}
    `;
export type CreateMintOrderMutationFn = Apollo.MutationFunction<CreateMintOrderMutation, CreateMintOrderMutationVariables>;

/**
 * __useCreateMintOrderMutation__
 *
 * To run a mutation, you first call `useCreateMintOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMintOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMintOrderMutation, { data, loading, error }] = useCreateMintOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMintOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateMintOrderMutation, CreateMintOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMintOrderMutation, CreateMintOrderMutationVariables>(CreateMintOrderDocument, options);
      }
export type CreateMintOrderMutationHookResult = ReturnType<typeof useCreateMintOrderMutation>;
export type CreateMintOrderMutationResult = Apollo.MutationResult<CreateMintOrderMutation>;
export type CreateMintOrderMutationOptions = Apollo.BaseMutationOptions<CreateMintOrderMutation, CreateMintOrderMutationVariables>;
export const GetPaymentStateDocument = gql`
    query getPaymentState($input: GetPaymentStateInput!) {
  getPaymentState(input: $input) {
    payment {
      status
    }
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useGetPaymentStateQuery__
 *
 * To run a query within a React component, call `useGetPaymentStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentStateQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaymentStateQuery(baseOptions: Apollo.QueryHookOptions<GetPaymentStateQuery, GetPaymentStateQueryVariables> & ({ variables: GetPaymentStateQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaymentStateQuery, GetPaymentStateQueryVariables>(GetPaymentStateDocument, options);
      }
export function useGetPaymentStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentStateQuery, GetPaymentStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaymentStateQuery, GetPaymentStateQueryVariables>(GetPaymentStateDocument, options);
        }
export function useGetPaymentStateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPaymentStateQuery, GetPaymentStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPaymentStateQuery, GetPaymentStateQueryVariables>(GetPaymentStateDocument, options);
        }
export type GetPaymentStateQueryHookResult = ReturnType<typeof useGetPaymentStateQuery>;
export type GetPaymentStateLazyQueryHookResult = ReturnType<typeof useGetPaymentStateLazyQuery>;
export type GetPaymentStateSuspenseQueryHookResult = ReturnType<typeof useGetPaymentStateSuspenseQuery>;
export type GetPaymentStateQueryResult = Apollo.QueryResult<GetPaymentStateQuery, GetPaymentStateQueryVariables>;
export const CreateWithdrawRequestDocument = gql`
    mutation createWithdrawRequest($input: CreateWithdrawRequestInput!) {
  createWithdrawRequest(input: $input) {
    isSuccess
    error {
      code
      message
    }
  }
}
    `;
export type CreateWithdrawRequestMutationFn = Apollo.MutationFunction<CreateWithdrawRequestMutation, CreateWithdrawRequestMutationVariables>;

/**
 * __useCreateWithdrawRequestMutation__
 *
 * To run a mutation, you first call `useCreateWithdrawRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWithdrawRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWithdrawRequestMutation, { data, loading, error }] = useCreateWithdrawRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWithdrawRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateWithdrawRequestMutation, CreateWithdrawRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWithdrawRequestMutation, CreateWithdrawRequestMutationVariables>(CreateWithdrawRequestDocument, options);
      }
export type CreateWithdrawRequestMutationHookResult = ReturnType<typeof useCreateWithdrawRequestMutation>;
export type CreateWithdrawRequestMutationResult = Apollo.MutationResult<CreateWithdrawRequestMutation>;
export type CreateWithdrawRequestMutationOptions = Apollo.BaseMutationOptions<CreateWithdrawRequestMutation, CreateWithdrawRequestMutationVariables>;
export const GetCurrencyExchangeDocument = gql`
    query getCurrencyExchange {
  getCurrencyExchange {
    currencyExchange {
      value
    }
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useGetCurrencyExchangeQuery__
 *
 * To run a query within a React component, call `useGetCurrencyExchangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrencyExchangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrencyExchangeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrencyExchangeQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrencyExchangeQuery, GetCurrencyExchangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrencyExchangeQuery, GetCurrencyExchangeQueryVariables>(GetCurrencyExchangeDocument, options);
      }
export function useGetCurrencyExchangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrencyExchangeQuery, GetCurrencyExchangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrencyExchangeQuery, GetCurrencyExchangeQueryVariables>(GetCurrencyExchangeDocument, options);
        }
export function useGetCurrencyExchangeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCurrencyExchangeQuery, GetCurrencyExchangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurrencyExchangeQuery, GetCurrencyExchangeQueryVariables>(GetCurrencyExchangeDocument, options);
        }
export type GetCurrencyExchangeQueryHookResult = ReturnType<typeof useGetCurrencyExchangeQuery>;
export type GetCurrencyExchangeLazyQueryHookResult = ReturnType<typeof useGetCurrencyExchangeLazyQuery>;
export type GetCurrencyExchangeSuspenseQueryHookResult = ReturnType<typeof useGetCurrencyExchangeSuspenseQuery>;
export type GetCurrencyExchangeQueryResult = Apollo.QueryResult<GetCurrencyExchangeQuery, GetCurrencyExchangeQueryVariables>;
export const CreateBuyOrderDocument = gql`
    mutation createBuyOrder($input: CreateBuyOrderInput!) {
  createBuyOrder(input: $input) {
    orderId
    approveUrl
    error {
      code
      message
    }
  }
}
    `;
export type CreateBuyOrderMutationFn = Apollo.MutationFunction<CreateBuyOrderMutation, CreateBuyOrderMutationVariables>;

/**
 * __useCreateBuyOrderMutation__
 *
 * To run a mutation, you first call `useCreateBuyOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBuyOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBuyOrderMutation, { data, loading, error }] = useCreateBuyOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBuyOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateBuyOrderMutation, CreateBuyOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBuyOrderMutation, CreateBuyOrderMutationVariables>(CreateBuyOrderDocument, options);
      }
export type CreateBuyOrderMutationHookResult = ReturnType<typeof useCreateBuyOrderMutation>;
export type CreateBuyOrderMutationResult = Apollo.MutationResult<CreateBuyOrderMutation>;
export type CreateBuyOrderMutationOptions = Apollo.BaseMutationOptions<CreateBuyOrderMutation, CreateBuyOrderMutationVariables>;
export const GetDirectDepositPaymentDocument = gql`
    query getDirectDepositPayment($input: GetPaymentStateInput!) {
  getPaymentState(input: $input) {
    payment {
      depositorName
      totalAmount
    }
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useGetDirectDepositPaymentQuery__
 *
 * To run a query within a React component, call `useGetDirectDepositPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDirectDepositPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDirectDepositPaymentQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDirectDepositPaymentQuery(baseOptions: Apollo.QueryHookOptions<GetDirectDepositPaymentQuery, GetDirectDepositPaymentQueryVariables> & ({ variables: GetDirectDepositPaymentQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDirectDepositPaymentQuery, GetDirectDepositPaymentQueryVariables>(GetDirectDepositPaymentDocument, options);
      }
export function useGetDirectDepositPaymentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDirectDepositPaymentQuery, GetDirectDepositPaymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDirectDepositPaymentQuery, GetDirectDepositPaymentQueryVariables>(GetDirectDepositPaymentDocument, options);
        }
export function useGetDirectDepositPaymentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDirectDepositPaymentQuery, GetDirectDepositPaymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDirectDepositPaymentQuery, GetDirectDepositPaymentQueryVariables>(GetDirectDepositPaymentDocument, options);
        }
export type GetDirectDepositPaymentQueryHookResult = ReturnType<typeof useGetDirectDepositPaymentQuery>;
export type GetDirectDepositPaymentLazyQueryHookResult = ReturnType<typeof useGetDirectDepositPaymentLazyQuery>;
export type GetDirectDepositPaymentSuspenseQueryHookResult = ReturnType<typeof useGetDirectDepositPaymentSuspenseQuery>;
export type GetDirectDepositPaymentQueryResult = Apollo.QueryResult<GetDirectDepositPaymentQuery, GetDirectDepositPaymentQueryVariables>;
export const GetUserDocument = gql`
    query getUser($input: GetUserInput!) {
  getUser(input: $input) {
    user {
      id
      email
      nickname
      password
      createdAt
      phoneNumber
      profileImage
      countryCode
      available_amount
    }
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const EditUserDocument = gql`
    mutation editUser($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      email
      nickname
      countryCode
    }
    error {
      code
      message
    }
  }
}
    `;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const FindUserByNicknameDocument = gql`
    query findUserByNickname($input: FindUserByNicknameInput!) {
  findUserByNickname(input: $input) {
    user
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useFindUserByNicknameQuery__
 *
 * To run a query within a React component, call `useFindUserByNicknameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserByNicknameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserByNicknameQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindUserByNicknameQuery(baseOptions: Apollo.QueryHookOptions<FindUserByNicknameQuery, FindUserByNicknameQueryVariables> & ({ variables: FindUserByNicknameQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserByNicknameQuery, FindUserByNicknameQueryVariables>(FindUserByNicknameDocument, options);
      }
export function useFindUserByNicknameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserByNicknameQuery, FindUserByNicknameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserByNicknameQuery, FindUserByNicknameQueryVariables>(FindUserByNicknameDocument, options);
        }
export function useFindUserByNicknameSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindUserByNicknameQuery, FindUserByNicknameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUserByNicknameQuery, FindUserByNicknameQueryVariables>(FindUserByNicknameDocument, options);
        }
export type FindUserByNicknameQueryHookResult = ReturnType<typeof useFindUserByNicknameQuery>;
export type FindUserByNicknameLazyQueryHookResult = ReturnType<typeof useFindUserByNicknameLazyQuery>;
export type FindUserByNicknameSuspenseQueryHookResult = ReturnType<typeof useFindUserByNicknameSuspenseQuery>;
export type FindUserByNicknameQueryResult = Apollo.QueryResult<FindUserByNicknameQuery, FindUserByNicknameQueryVariables>;
export const VerifyPasswordDocument = gql`
    query verifyPassword($input: VerifyPasswordInput!) {
  verifyPassword(input: $input) {
    verify
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useVerifyPasswordQuery__
 *
 * To run a query within a React component, call `useVerifyPasswordQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyPasswordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyPasswordQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVerifyPasswordQuery(baseOptions: Apollo.QueryHookOptions<VerifyPasswordQuery, VerifyPasswordQueryVariables> & ({ variables: VerifyPasswordQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyPasswordQuery, VerifyPasswordQueryVariables>(VerifyPasswordDocument, options);
      }
export function useVerifyPasswordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyPasswordQuery, VerifyPasswordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyPasswordQuery, VerifyPasswordQueryVariables>(VerifyPasswordDocument, options);
        }
export function useVerifyPasswordSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<VerifyPasswordQuery, VerifyPasswordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VerifyPasswordQuery, VerifyPasswordQueryVariables>(VerifyPasswordDocument, options);
        }
export type VerifyPasswordQueryHookResult = ReturnType<typeof useVerifyPasswordQuery>;
export type VerifyPasswordLazyQueryHookResult = ReturnType<typeof useVerifyPasswordLazyQuery>;
export type VerifyPasswordSuspenseQueryHookResult = ReturnType<typeof useVerifyPasswordSuspenseQuery>;
export type VerifyPasswordQueryResult = Apollo.QueryResult<VerifyPasswordQuery, VerifyPasswordQueryVariables>;
export const OnRegisterKycDocument = gql`
    mutation onRegisterKYC($input: OnRegisterKYCInput!) {
  onRegisterKYC(input: $input) {
    success
    error {
      code
      message
    }
  }
}
    `;
export type OnRegisterKycMutationFn = Apollo.MutationFunction<OnRegisterKycMutation, OnRegisterKycMutationVariables>;

/**
 * __useOnRegisterKycMutation__
 *
 * To run a mutation, you first call `useOnRegisterKycMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnRegisterKycMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onRegisterKycMutation, { data, loading, error }] = useOnRegisterKycMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOnRegisterKycMutation(baseOptions?: Apollo.MutationHookOptions<OnRegisterKycMutation, OnRegisterKycMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnRegisterKycMutation, OnRegisterKycMutationVariables>(OnRegisterKycDocument, options);
      }
export type OnRegisterKycMutationHookResult = ReturnType<typeof useOnRegisterKycMutation>;
export type OnRegisterKycMutationResult = Apollo.MutationResult<OnRegisterKycMutation>;
export type OnRegisterKycMutationOptions = Apollo.BaseMutationOptions<OnRegisterKycMutation, OnRegisterKycMutationVariables>;
export const OnUploadKycImageDocument = gql`
    mutation onUploadKYCImage($input: OnUploadKYCImageInput!) {
  onUploadKYCImage(input: $input) {
    url
    error {
      code
      message
    }
  }
}
    `;
export type OnUploadKycImageMutationFn = Apollo.MutationFunction<OnUploadKycImageMutation, OnUploadKycImageMutationVariables>;

/**
 * __useOnUploadKycImageMutation__
 *
 * To run a mutation, you first call `useOnUploadKycImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnUploadKycImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onUploadKycImageMutation, { data, loading, error }] = useOnUploadKycImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOnUploadKycImageMutation(baseOptions?: Apollo.MutationHookOptions<OnUploadKycImageMutation, OnUploadKycImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnUploadKycImageMutation, OnUploadKycImageMutationVariables>(OnUploadKycImageDocument, options);
      }
export type OnUploadKycImageMutationHookResult = ReturnType<typeof useOnUploadKycImageMutation>;
export type OnUploadKycImageMutationResult = Apollo.MutationResult<OnUploadKycImageMutation>;
export type OnUploadKycImageMutationOptions = Apollo.BaseMutationOptions<OnUploadKycImageMutation, OnUploadKycImageMutationVariables>;
export const GetKycDocument = gql`
    query getKYC {
  getKYC {
    kyc {
      id
      userId
      status
      createdAt
      updatedAt
    }
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useGetKycQuery__
 *
 * To run a query within a React component, call `useGetKycQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetKycQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetKycQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetKycQuery(baseOptions?: Apollo.QueryHookOptions<GetKycQuery, GetKycQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetKycQuery, GetKycQueryVariables>(GetKycDocument, options);
      }
export function useGetKycLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetKycQuery, GetKycQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetKycQuery, GetKycQueryVariables>(GetKycDocument, options);
        }
export function useGetKycSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetKycQuery, GetKycQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetKycQuery, GetKycQueryVariables>(GetKycDocument, options);
        }
export type GetKycQueryHookResult = ReturnType<typeof useGetKycQuery>;
export type GetKycLazyQueryHookResult = ReturnType<typeof useGetKycLazyQuery>;
export type GetKycSuspenseQueryHookResult = ReturnType<typeof useGetKycSuspenseQuery>;
export type GetKycQueryResult = Apollo.QueryResult<GetKycQuery, GetKycQueryVariables>;
export const OnUpdateSnsVerifyDocument = gql`
    mutation onUpdateSNSVerify {
  onUpdateSNSVerify {
    success
    error {
      code
      message
    }
  }
}
    `;
export type OnUpdateSnsVerifyMutationFn = Apollo.MutationFunction<OnUpdateSnsVerifyMutation, OnUpdateSnsVerifyMutationVariables>;

/**
 * __useOnUpdateSnsVerifyMutation__
 *
 * To run a mutation, you first call `useOnUpdateSnsVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateSnsVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onUpdateSnsVerifyMutation, { data, loading, error }] = useOnUpdateSnsVerifyMutation({
 *   variables: {
 *   },
 * });
 */
export function useOnUpdateSnsVerifyMutation(baseOptions?: Apollo.MutationHookOptions<OnUpdateSnsVerifyMutation, OnUpdateSnsVerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnUpdateSnsVerifyMutation, OnUpdateSnsVerifyMutationVariables>(OnUpdateSnsVerifyDocument, options);
      }
export type OnUpdateSnsVerifyMutationHookResult = ReturnType<typeof useOnUpdateSnsVerifyMutation>;
export type OnUpdateSnsVerifyMutationResult = Apollo.MutationResult<OnUpdateSnsVerifyMutation>;
export type OnUpdateSnsVerifyMutationOptions = Apollo.BaseMutationOptions<OnUpdateSnsVerifyMutation, OnUpdateSnsVerifyMutationVariables>;
export const OnStartExtraStackDocument = gql`
    mutation onStartExtraStack {
  onStartExtraStack {
    success
    error {
      code
      message
    }
  }
}
    `;
export type OnStartExtraStackMutationFn = Apollo.MutationFunction<OnStartExtraStackMutation, OnStartExtraStackMutationVariables>;

/**
 * __useOnStartExtraStackMutation__
 *
 * To run a mutation, you first call `useOnStartExtraStackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnStartExtraStackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onStartExtraStackMutation, { data, loading, error }] = useOnStartExtraStackMutation({
 *   variables: {
 *   },
 * });
 */
export function useOnStartExtraStackMutation(baseOptions?: Apollo.MutationHookOptions<OnStartExtraStackMutation, OnStartExtraStackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnStartExtraStackMutation, OnStartExtraStackMutationVariables>(OnStartExtraStackDocument, options);
      }
export type OnStartExtraStackMutationHookResult = ReturnType<typeof useOnStartExtraStackMutation>;
export type OnStartExtraStackMutationResult = Apollo.MutationResult<OnStartExtraStackMutation>;
export type OnStartExtraStackMutationOptions = Apollo.BaseMutationOptions<OnStartExtraStackMutation, OnStartExtraStackMutationVariables>;
export const GetUserHistoryByUserIdDocument = gql`
    query getUserHistoryByUserId($input: GetUserHistoryByIdInput!) {
  getUserHistoryByUserId(input: $input) {
    histories {
      id
      from {
        nickname
      }
      to {
        nickname
      }
      nft {
        state
        tokenId
        metadata {
          name
          description
          image
        }
      }
      amount
      detailType
      message
      createdAt
    }
    total
    page
    pageSize
  }
}
    `;

/**
 * __useGetUserHistoryByUserIdQuery__
 *
 * To run a query within a React component, call `useGetUserHistoryByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserHistoryByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserHistoryByUserIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserHistoryByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserHistoryByUserIdQuery, GetUserHistoryByUserIdQueryVariables> & ({ variables: GetUserHistoryByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserHistoryByUserIdQuery, GetUserHistoryByUserIdQueryVariables>(GetUserHistoryByUserIdDocument, options);
      }
export function useGetUserHistoryByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserHistoryByUserIdQuery, GetUserHistoryByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserHistoryByUserIdQuery, GetUserHistoryByUserIdQueryVariables>(GetUserHistoryByUserIdDocument, options);
        }
export function useGetUserHistoryByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserHistoryByUserIdQuery, GetUserHistoryByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserHistoryByUserIdQuery, GetUserHistoryByUserIdQueryVariables>(GetUserHistoryByUserIdDocument, options);
        }
export type GetUserHistoryByUserIdQueryHookResult = ReturnType<typeof useGetUserHistoryByUserIdQuery>;
export type GetUserHistoryByUserIdLazyQueryHookResult = ReturnType<typeof useGetUserHistoryByUserIdLazyQuery>;
export type GetUserHistoryByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetUserHistoryByUserIdSuspenseQuery>;
export type GetUserHistoryByUserIdQueryResult = Apollo.QueryResult<GetUserHistoryByUserIdQuery, GetUserHistoryByUserIdQueryVariables>;