import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Connection = {
  edges: Array<Edge>;
  nodes: Array<Node>;
  pageInfo: PageInfo;
};

export type CreateOauthClientInput = {
  clientId: Scalars['String']['input'];
  clientType: OauthClientType;
  name: Scalars['String']['input'];
  redirectUrls: Array<Scalars['String']['input']>;
  scope: OauthClientScope;
};

export type CreateUserInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Edge = {
  cursor: Scalars['Cursor']['output'];
  node: Node;
};

export type GqlStatus = {
  __typename?: 'GqlStatus';
  status: Scalars['String']['output'];
};

export type IndexingPhotosInput = {
  fast: Scalars['Boolean']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOauthClient: OauthClient;
  createUser: User;
  indexingPhotos: Scalars['Boolean']['output'];
  uploadPhoto: PhotoUploadInfo;
};


export type MutationCreateOauthClientArgs = {
  input: CreateOauthClientInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationIndexingPhotosArgs = {
  input?: InputMaybe<IndexingPhotosInput>;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type OauthClient = Node & {
  __typename?: 'OauthClient';
  clientId: Scalars['String']['output'];
  clientSecret?: Maybe<Scalars['String']['output']>;
  clientType: OauthClientType;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  redirectUrls: Array<Scalars['String']['output']>;
  scope: OauthClientScope;
};

export enum OauthClientScope {
  Admin = 'admin',
  General = 'general'
}

export enum OauthClientType {
  ClientCredential = 'ClientCredential',
  UserClient = 'UserClient'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type Pagination = {
  nodes: Array<Node>;
  pageInfo: PaginationInfo;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  count: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  paginationLength: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type Photo = Node & {
  __typename?: 'Photo';
  dateTimeOriginal: Scalars['Timestamp']['output'];
  exifData: Array<PhotoExif>;
  fileTypes: Array<Scalars['String']['output']>;
  files: Array<PhotoFile>;
  id: Scalars['ID']['output'];
  importedAt: Scalars['Timestamp']['output'];
  name: Scalars['String']['output'];
  previewUrl: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
};

export type PhotoExif = Node & {
  __typename?: 'PhotoExif';
  id: Scalars['ID']['output'];
  tagId: Scalars['Int']['output'];
  tagType: Scalars['String']['output'];
  valueString: Scalars['String']['output'];
};

export type PhotoFile = Node & {
  __typename?: 'PhotoFile';
  fileHash: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  fileType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  importedAt: Scalars['Timestamp']['output'];
  photo: Photo;
  photoId: Scalars['ID']['output'];
};

export type PhotoPagination = Pagination & {
  __typename?: 'PhotoPagination';
  nodes: Array<Photo>;
  pageInfo: PaginationInfo;
};

export type PhotoUploadInfo = {
  __typename?: 'PhotoUploadInfo';
  expireAt: Scalars['Int']['output'];
  uploadUrl: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  existUserId: Scalars['Boolean']['output'];
  gqlStatus: GqlStatus;
  me?: Maybe<User>;
  photo?: Maybe<Photo>;
  photoFile?: Maybe<PhotoFile>;
  photoFiles: Array<PhotoFile>;
  photos: PhotoPagination;
  user?: Maybe<User>;
  users: UserPagination;
};


export type QueryExistUserIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryPhotoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPhotoFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPhotoFilesArgs = {
  photoId: Scalars['ID']['input'];
};


export type QueryPhotosArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<UserPassword>;
  status: UserStatus;
  userId: Scalars['String']['output'];
};

export type UserEdge = Edge & {
  __typename?: 'UserEdge';
  cursor: Scalars['Cursor']['output'];
  node: User;
};

export type UserPagination = Pagination & {
  __typename?: 'UserPagination';
  nodes: Array<User>;
  pageInfo: PaginationInfo;
};

export type UserPassword = Node & {
  __typename?: 'UserPassword';
  id: Scalars['ID']['output'];
  isInitialized: Scalars['Boolean']['output'];
  lastModified: Scalars['Timestamp']['output'];
};

export enum UserStatus {
  Active = 'Active',
  Withdrawal = 'Withdrawal'
}

export type CreateUserMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, userId: string, name: string } };

export type ExistUserIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ExistUserIdQuery = { __typename?: 'Query', existUserId: boolean };

export type GqlStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlStatusQuery = { __typename?: 'Query', gqlStatus: { __typename?: 'GqlStatus', status: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, userId: string, name: string } | null };

export type PhotoQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PhotoQuery = { __typename?: 'Query', photo?: { __typename?: 'Photo', id: string, name: string, previewUrl: string, dateTimeOriginal: any, files: Array<{ __typename?: 'PhotoFile', id: string, fileType: string, fileHash: string, fileName: string }> } | null };

export type PhotosQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PhotosQuery = { __typename?: 'Query', photos: { __typename?: 'PhotoPagination', pageInfo: { __typename?: 'PaginationInfo', page: number, paginationLength: number, hasNextPage: boolean, hasPreviousPage: boolean, count: number, totalCount: number }, nodes: Array<{ __typename?: 'Photo', id: string, name: string, dateTimeOriginal: any, thumbnailUrl: string, previewUrl: string }> } };


export const CreateUserDocument = gql`
    mutation createUser($userId: String!, $name: String!, $password: String!) {
  createUser(input: {userId: $userId, name: $name, password: $password}) {
    id
    userId
    name
  }
}
    `;
export const ExistUserIdDocument = gql`
    query existUserId($id: String!) {
  existUserId(id: $id)
}
    `;
export const GqlStatusDocument = gql`
    query gqlStatus {
  gqlStatus {
    status
  }
}
    `;
export const MeDocument = gql`
    query me {
  me {
    id
    userId
    name
  }
}
    `;
export const PhotoDocument = gql`
    query photo($id: ID!) {
  photo(id: $id) {
    id
    name
    previewUrl
    dateTimeOriginal
    files {
      id
      fileType
      fileHash
      fileName
    }
  }
}
    `;
export const PhotosDocument = gql`
    query photos($limit: Int!, $offset: Int) {
  photos(limit: $limit, offset: $offset) {
    pageInfo {
      page
      paginationLength
      hasNextPage
      hasPreviousPage
      count
      totalCount
    }
    nodes {
      id
      name
      dateTimeOriginal
      thumbnailUrl
      previewUrl
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createUser(variables: CreateUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    existUserId(variables: ExistUserIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExistUserIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExistUserIdQuery>(ExistUserIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'existUserId', 'query');
    },
    gqlStatus(variables?: GqlStatusQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GqlStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GqlStatusQuery>(GqlStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'gqlStatus', 'query');
    },
    me(variables?: MeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MeQuery>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'me', 'query');
    },
    photo(variables: PhotoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PhotoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PhotoQuery>(PhotoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'photo', 'query');
    },
    photos(variables: PhotosQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PhotosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PhotosQuery>(PhotosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'photos', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;