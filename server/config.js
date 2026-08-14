import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {}
  }

  const content = fs.readFileSync(filePath, 'utf8')

  return content.split('\n').reduce((env, line) => {
    const trimmedLine = line.trim()

    if (!trimmedLine || trimmedLine.startsWith('#')) {
      return env
    }

    const separatorIndex = trimmedLine.indexOf('=')

    if (separatorIndex === -1) {
      return env
    }

    const key = trimmedLine.slice(0, separatorIndex).trim()
    const value = trimmedLine.slice(separatorIndex + 1).trim()

    env[key] = value
    return env
  }, {})
}

const fileEnv = parseEnvFile(path.join(rootDir, '.env'))

function getConfigValue(key, fallbackValue) {
  return process.env[key] || fileEnv[key] || fallbackValue
}

// 以下 MerchantID / HashKey / HashIV 預設值為綠界官方公開的測試環境帳密，
// 僅供本機開發 stage 測試使用，不是正式金鑰；正式環境必須以環境變數覆蓋。
export const appConfig = {
  port: Number(getConfigValue('PORT', 3000)),
  appBaseUrl: getConfigValue('APP_BASE_URL', 'http://localhost:3000'),
  frontendBaseUrl: getConfigValue('FRONTEND_BASE_URL', 'http://localhost:5173'),
  ecpayEnv: getConfigValue('ECPAY_ENV', 'stage'),
  merchantId: getConfigValue('ECPAY_MERCHANT_ID', '3002607'),
  hashKey: getConfigValue('ECPAY_HASH_KEY', 'pwFHCqoQZGmho4w6'),
  hashIv: getConfigValue('ECPAY_HASH_IV', 'EkRm7iFT261dpevs'),
  isDemoConfirmEnabled: getConfigValue('NODE_ENV', 'development') !== 'production',
  lineChannelSecret: getConfigValue('LINE_CHANNEL_SECRET', ''),
  lineChannelAccessToken: getConfigValue('LINE_CHANNEL_ACCESS_TOKEN', ''),
}
