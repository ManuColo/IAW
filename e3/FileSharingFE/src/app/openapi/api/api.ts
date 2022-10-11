export * from './fileController.service';
import { FileControllerService } from './fileController.service';
export * from './pingController.service';
import { PingControllerService } from './pingController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export * from './userFileController.service';
import { UserFileControllerService } from './userFileController.service';
export const APIS = [FileControllerService, PingControllerService, UserControllerService, UserFileControllerService];
