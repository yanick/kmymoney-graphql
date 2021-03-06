/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLQuery {
  accounts?: Array<GQLAccount | null>;
  account?: GQLAccount;
  categories?: Array<GQLCategory | null>;
  category?: GQLCategory;
}

export interface GQLAccount {
  id?: string;
  is_closed?: boolean;
  accountName?: string;
  institutionId?: string;
  institution?: GQLInstitution;
  balance?: GQLBalance;
  subaccounts?: Array<GQLAccount | null>;
  fullname?: string;
  splits?: Array<GQLSplit | null>;
  parentId?: string;
  isStockAccount?: boolean;
}

export interface GQLInstitution {
  name?: string;
}

export interface GQLBalance {
  value?: number;
  amount?: number;
  price?: number;
}

export interface GQLSplit {
  account?: GQLAccount;
  postDate?: string;
  value?: number;
  shares?: number;
  amount?: number;
  price?: number;
  memo?: string;
  payee?: GQLPayee;
  transaction?: GQLTransaction;
  associatedSplits?: Array<GQLSplit | null>;
}

export interface GQLPayee {
  id?: string;
  name?: string;
}

export interface GQLTransaction {
  id?: string;
  postDate?: string;
  memo?: string;
}

export interface GQLCategory {
  name?: string;
  root_accounts?: Array<GQLAccount | null>;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
  Query?: GQLQueryTypeResolver;
  Account?: GQLAccountTypeResolver;
  Institution?: GQLInstitutionTypeResolver;
  Balance?: GQLBalanceTypeResolver;
  Split?: GQLSplitTypeResolver;
  Payee?: GQLPayeeTypeResolver;
  Transaction?: GQLTransactionTypeResolver;
  Category?: GQLCategoryTypeResolver;
}
export interface GQLQueryTypeResolver<TParent = any> {
  accounts?: QueryToAccountsResolver<TParent>;
  account?: QueryToAccountResolver<TParent>;
  categories?: QueryToCategoriesResolver<TParent>;
  category?: QueryToCategoryResolver<TParent>;
}

export interface QueryToAccountsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToAccountArgs {
  id: string;
}
export interface QueryToAccountResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToAccountArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToCategoriesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToCategoryArgs {
  name: string;
}
export interface QueryToCategoryResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToCategoryArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLAccountTypeResolver<TParent = any> {
  id?: AccountToIdResolver<TParent>;
  is_closed?: AccountToIs_closedResolver<TParent>;
  accountName?: AccountToAccountNameResolver<TParent>;
  institutionId?: AccountToInstitutionIdResolver<TParent>;
  institution?: AccountToInstitutionResolver<TParent>;
  balance?: AccountToBalanceResolver<TParent>;
  subaccounts?: AccountToSubaccountsResolver<TParent>;
  fullname?: AccountToFullnameResolver<TParent>;
  splits?: AccountToSplitsResolver<TParent>;
  parentId?: AccountToParentIdResolver<TParent>;
  isStockAccount?: AccountToIsStockAccountResolver<TParent>;
}

export interface AccountToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AccountToIs_closedResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AccountToAccountNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AccountToInstitutionIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AccountToInstitutionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AccountToBalanceArgs {
  date?: string;
}
export interface AccountToBalanceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: AccountToBalanceArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AccountToSubaccountsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AccountToFullnameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AccountToSplitsArgs {
  year?: number;
  month?: number;
}
export interface AccountToSplitsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: AccountToSplitsArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AccountToParentIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AccountToIsStockAccountResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLInstitutionTypeResolver<TParent = any> {
  name?: InstitutionToNameResolver<TParent>;
}

export interface InstitutionToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLBalanceTypeResolver<TParent = any> {
  value?: BalanceToValueResolver<TParent>;
  amount?: BalanceToAmountResolver<TParent>;
  price?: BalanceToPriceResolver<TParent>;
}

export interface BalanceToValueResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface BalanceToAmountResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface BalanceToPriceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLSplitTypeResolver<TParent = any> {
  account?: SplitToAccountResolver<TParent>;
  postDate?: SplitToPostDateResolver<TParent>;
  value?: SplitToValueResolver<TParent>;
  shares?: SplitToSharesResolver<TParent>;
  amount?: SplitToAmountResolver<TParent>;
  price?: SplitToPriceResolver<TParent>;
  memo?: SplitToMemoResolver<TParent>;
  payee?: SplitToPayeeResolver<TParent>;
  transaction?: SplitToTransactionResolver<TParent>;
  associatedSplits?: SplitToAssociatedSplitsResolver<TParent>;
}

export interface SplitToAccountResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SplitToPostDateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SplitToValueResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SplitToSharesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SplitToAmountResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SplitToPriceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SplitToMemoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SplitToPayeeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SplitToTransactionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SplitToAssociatedSplitsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLPayeeTypeResolver<TParent = any> {
  id?: PayeeToIdResolver<TParent>;
  name?: PayeeToNameResolver<TParent>;
}

export interface PayeeToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PayeeToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLTransactionTypeResolver<TParent = any> {
  id?: TransactionToIdResolver<TParent>;
  postDate?: TransactionToPostDateResolver<TParent>;
  memo?: TransactionToMemoResolver<TParent>;
}

export interface TransactionToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TransactionToPostDateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TransactionToMemoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLCategoryTypeResolver<TParent = any> {
  name?: CategoryToNameResolver<TParent>;
  root_accounts?: CategoryToRoot_accountsResolver<TParent>;
}

export interface CategoryToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CategoryToRoot_accountsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
