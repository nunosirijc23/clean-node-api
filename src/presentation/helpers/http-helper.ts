import { type HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const createdRequest = (message: string): HttpResponse => ({
  statusCode: 201,
  body: {
    success: true,
    message
  }
})
