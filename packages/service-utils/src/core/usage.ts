import { z } from "zod";

export const usageEventSchema = z.object({
  source: z.string(),
  action: z.string(),

  /**
   * The following fields are optional.
   */

  accountId: z.string().optional(),
  isClientEvent: z.boolean().optional(),
  apiKeyId: z.string().optional(),
  creatorWalletAddress: z.string().optional(),
  clientId: z.string().optional(),
  walletAddress: z.string().optional(),
  walletType: z.string().optional(),
  chainId: z.number().int().positive().optional(),
  provider: z.string().optional(),
  mimeType: z.string().optional(),
  fileSize: z.number().int().nonnegative().optional(),
  fileCid: z.string().optional(),
  evmMethod: z.string().optional(),
  userOpHash: z.string().optional(),
  gasLimit: z.number().nonnegative().optional(),
  gasPricePerUnit: z.string().optional(),
  transactionFeeUsd: z.number().optional(),
  transactionHash: z.string().optional(),
  sdkName: z.string().optional(),
  sdkVersion: z.string().optional(),
  sdkPlatform: z.string().optional(),
  sdkOS: z.string().optional(),
  productName: z.string().optional(),
  transactionValue: z.string().optional(),
  pathname: z.string().optional(),
  contractAddress: z.string().optional(),
  errorCode: z.string().optional(),
  httpStatusCode: z.number().int().nonnegative().optional(),
  functionName: z.string().optional(),
  extension: z.string().optional(),
  retryCount: z.number().int().nonnegative().optional(),
  policyId: z.string().optional(),
  msSinceQueue: z.number().nonnegative().optional(),
  msSinceSend: z.number().nonnegative().optional(),
  msTotalDuration: z.number().nonnegative().optional(),
  swapId: z.string().optional(),
  tokenAddress: z.string().optional(),
  amountWei: z.string().optional(),
  amountUSDCents: z.number().nonnegative().optional(),
  httpMethod: z
    .enum([
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "PATCH",
      "HEAD",
      "CONNECT",
      "OPTIONS",
      "TRACE",
    ])
    .optional(),
  // Used to identify the ecosystem that the an ecosystem wallet belongs too
  ecosystemId: z.string().optional(),
  ecosystemPartnerId: z.string().optional(),
  authenticationMethod: z.string().optional(),
  chainName: z.string().optional(),
  tokenSymbol: z.string().optional(),
  dstChainId: z.number().optional(),
  dstTokenAddress: z.string().optional(),
  dstChainName: z.string().optional(),
  dstTokenSymbol: z.string().optional(),
  msLatency: z.number().optional(),
  toAmountUSDCents: z.number().optional(),
  secondaryProvider: z.string().optional(),
  onRampId: z.string().optional(),
  evmRequestParams: z.string().optional(),
  providerIp: z.string().optional(),
  promptTokens: z.number().int().nonnegative().optional(),
  completionTokens: z.number().int().nonnegative().optional(),
  modelName: z.string().optional(),
  sessionId: z.string().optional(),
  requestId: z.string().optional(),
});
export type UsageEvent = z.infer<typeof usageEventSchema>;
