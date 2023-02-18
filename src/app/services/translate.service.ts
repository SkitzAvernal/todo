import { Injectable } from '@angular/core';
import { Translate } from '@google-cloud/translate/build/src/v2';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private readonly projectID = 'coral-heuristic-378204';
  private readonly translate = new Translate({projectId:this.projectID})
  
  public async translateText(text: string, target: string): Promise<string>{
    const [translation] = await this.translate.translate(text, target)
    return translation
  }

  constructor() { }

}
