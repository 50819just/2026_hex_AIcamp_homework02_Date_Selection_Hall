const defaultApiBaseUrl = typeof window === 'undefined'
  ? 'http://localhost:3000'
  : `${window.location.protocol}//${window.location.hostname}:3000`

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl

function buildApiUrl(path) {
  return `${apiBaseUrl}${path}`
}

async function requestJson(url, options = {}) {
  let response

  try {
    response = await fetch(buildApiUrl(url), {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    })
  } catch {
    throw new Error('本地服務目前連不上，請先啟動 server（可用 npm run server 或 npm run dev:all）後再試一次。')
  }

  const data = await response.json().catch(() => ({}))

  if (!response.ok || data.success === false) {
    throw new Error(data.message || '請求失敗，請稍後再試一次。')
  }

  return data
}

export async function createBookingRequest(payload) {
  const result = await requestJson('/api/bookings', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return result.data
}

export async function fetchBooking(bookingId) {
  const result = await requestJson(`/api/bookings/${bookingId}`)
  return result.data
}

export async function demoConfirmBooking(bookingId, confirmedServiceTotal) {
  const result = await requestJson(`/api/bookings/${bookingId}/demo-confirm`, {
    method: 'POST',
    body: JSON.stringify({ confirmedServiceTotal }),
  })
  return result.data
}

export async function createDepositOrder(bookingId) {
  return requestJson(`/api/bookings/${bookingId}/deposit-order`, {
    method: 'POST',
  })
}

export async function queryDepositOrder(merchantTradeNo) {
  const result = await requestJson('/api/ecpay/query', {
    method: 'POST',
    body: JSON.stringify({ merchantTradeNo }),
  })
  return result.data
}

export async function fetchDepositOrder(merchantTradeNo) {
  const result = await requestJson(`/api/ecpay/orders/${merchantTradeNo}`)
  return result.data
}
