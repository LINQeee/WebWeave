import { ElectronAPI } from '@electron-toolkit/preload'
import { ContextBridge } from 'electron'

declare global {
  interface Window {
    electron: ElectronAPI
    context: ContextBridge
  }
}
