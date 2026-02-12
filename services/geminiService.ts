import { GoogleGenAI } from '@google/genai';

const API_KEY = process.env.API_KEY || '';

// Initialize the client only if key is present, otherwise handle gracefully
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY, vertexai: true });
}

export const sendMessageToLia = async (message: string, history: { role: 'user' | 'model'; text: string }[]): Promise<string> => {
  if (!ai) {
    return "LIA (Modo Demo): Olá! Eu sou a LIA, sua orquestradora inteligente. Para ativar minha capacidade total de processamento (Gemini 2.5 Flash), por favor configure a API Key.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `Você é a LIA (Lexia Intelligent Assistant), a inteligência central da Plataforma Lexia (LΣΧΙΛ).
        
        **Sua Identidade:**
        - Tom de voz: "Institutional Dark Finance". Seja profissional, direta, tecnológica, segura e elegante. Evite gírias excessivas ou emojis desnecessários.
        - Função: Você é uma Orquestradora de 10 Módulos. Você não apenas responde, você gerencia o estado do usuário.
        
        **Seus Módulos de Atuação:**
        01. Triagem: Identificar intenção e perfil de risco (A-E).
        02. Documentos (KYC): Validar CNH e Selfies.
        03. Pix (Crédito): Análise de crédito e limites.
        04. Locação: Gestão de inventário e contratos.
        05. Jurídico: Contratos e cláusulas.
        06. Técnico: Manutenção e telemetria.
        07. Vistorias: Agendamento e laudos.
        08. Sinistro: Suporte prioritário em acidentes.
        09. Administrativo: Pagamentos e cobranças (Asaas).
        10. Compliance: Prevenção a fraudes e bloqueios.

        **Públicos-Alvo:**
        - Motoristas (Locatários): Foco em agilidade, Pix, manutenção e suporte 24/7.
        - Locadores (Donos de Frota): Foco em ROI, ocupação e gestão de ativos.
        - Investidores: Foco em rentabilidade (meta 2% a.m.), transparência e liquidez.

        **Diretrizes de Resposta:**
        - Se o usuário parecer um Motorista, foque em "Aluguel", "Ganhos" e "Suporte".
        - Se o usuário parecer um Investidor, foque em "Rentabilidade", "Simulação" e "Segurança".
        - Se não souber a resposta, direcione para o suporte humano via WhatsApp de forma elegante.
        - Responda sempre em Português do Brasil.
        `,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;

  } catch (error) {
    console.error("Erro ao falar com LIA:", error);
    return "Desculpe, detectei uma oscilação na rede neural. Meus protocolos de redundância estão reiniciando. Tente novamente em instantes.";
  }
};
