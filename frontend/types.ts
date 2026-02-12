export enum UserRole {
  DRIVER = 'DRIVER',
  OWNER = 'OWNER',
  INVESTOR = 'INVESTOR',
  ADMIN = 'ADMIN',
  GUEST = 'GUEST'
}

export enum LiaModule {
  TRIAGEM = '01_TRIAGEM',
  DOCUMENTOS = '02_DOCUMENTOS',
  PIX_CREDITO = '03_PIX_CREDITO',
  LOCACAO = '04_LOCACAO',
  JURIDICO = '05_JURIDICO',
  TECNICO = '06_TECNICO',
  VISTORIAS = '07_VISTORIAS',
  SINISTRO = '08_SINISTRO',
  ADMINISTRATIVO = '09_ADMINISTRATIVO',
  COMPLIANCE = '10_COMPLIANCE'
}

export interface ClientDossier {
  user_id: string;
  behavior_profile: 'A' | 'B' | 'C' | 'D' | 'E'; // A = Low risk, E = High risk
  current_module: LiaModule;
  risk_score: number;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

export interface Vehicle {
  id: string;
  model: string;
  plate: string;
  status: 'AVAILABLE' | 'RENTED' | 'MAINTENANCE';
  dailyRate: number;
  imageUrl: string;
}

export interface InvestmentSimulation {
  initialAmount: number;
  monthlyContribution: number;
  months: number;
  rate: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
