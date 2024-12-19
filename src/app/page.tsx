"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, PieChart, TrendingUp, BarChart2, Shield, Users } from 'lucide-react';
import { Button } from '@/app/components/ui/atoms/button';
import { Input } from '@/app/components/ui/atoms/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/atoms/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/atoms/table';
import { BarChart, PieChart as RechartsePieChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend, Pie } from 'recharts';
import {FeatureCard} from "@/app/components/ui/molecules/FeatureCard";
import {Title} from "@/app/components/ui/molecules/Title";

interface Transaction {
  id: number;
  type: 'income' | 'expense';
  amount: number;
  date: string;
}

export default function FinanceProLanding() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');

  const addTransaction = (
      type: 'income' | 'expense',
      amount: number | string
  ) => {
    if (amount && !isNaN(Number(amount))) {
      const newTransaction = {
        id: Date.now(),
        type,
        amount: parseFloat(String(amount)),
        date: new Date().toLocaleDateString(),
      };

      setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

      if (type === 'income') {
        setIncome('');
      } else {
        setExpense('');
      }
    }
  };

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);

  const chartData = [
    { name: 'Receita', value: totalIncome },
    { name: 'Despesa', value: totalExpense },
  ];

  const COLORS = ['#4CAF50', '#F44336'];

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
        <header className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
              <Title />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
            </motion.div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-16">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Revolucione sua Gestão Financeira</h2>
            <p className="text-xl text-gray-600 mb-8">
              FinancePro: A ferramenta definitiva para transformar suas finanças pessoais e alcançar seus objetivos financeiros
            </p>
            <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300"
                onClick={() => window.location.href = 'https://finance-app-tau-flax.vercel.app/'}
            >
              Comece sua Jornada <ArrowRight className="ml-2" />
            </Button>
          </motion.div>

          <section className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Recursos Principais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                  icon={<DollarSign size={40} />}
                  title="Controle Total de Gastos"
                  description="Acompanhe cada centavo com precisão. Categorize suas despesas e receitas para uma visão clara de para onde seu dinheiro está indo."
              />
              <FeatureCard
                  icon={<PieChart size={40} />}
                  title="Análise Visual Poderosa"
                  description="Gráficos intuitivos que transformam números em insights. Entenda seus padrões de gastos e identifique áreas de economia."
              />
              <FeatureCard
                  icon={<TrendingUp size={40} />}
                  title="Projeções Financeiras Inteligentes"
                  description="Planeje seu futuro financeiro com confiança. Nossas projeções baseadas em IA ajudam você a atingir suas metas financeiras."
              />
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Recursos Adicionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                  icon={<BarChart2 size={40} />}
                  title="Relatórios Personalizados"
                  description="Crie relatórios detalhados adaptados às suas necessidades. Obtenha uma visão abrangente de sua saúde financeira."
              />
              <FeatureCard
                  icon={<Shield size={40} />}
                  title="Segurança de Dados"
                  description="Sua privacidade é nossa prioridade. Utilizamos criptografia de ponta a ponta para proteger suas informações financeiras."
              />
              <FeatureCard
                  icon={<Users size={40} />}
                  title="Suporte Dedicado"
                  description="Nossa equipe de especialistas está sempre pronta para ajudar. Obtenha suporte personalizado para todas as suas dúvidas financeiras."
              />
            </div>
          </section>

          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-2xl p-8 mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Intuitivo</h3>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                  src="/print.png"
                  alt="Dashboard financeiro do FinancePro"
                  className="rounded-lg shadow-md"
              />
            </div>
          </motion.div>

          <section className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Experimente Nossa Visualização de Dados</h3>
            <p className="text-center text-gray-600 mb-8">
              Insira valores de receita e despesa para ver como o FinancePro transforma seus dados em insights visuais poderosos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Insira seus Dados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="income" className="block text-sm font-medium text-gray-700">Receita</label>
                      <div className="flex mt-1">
                        <Input
                            id="income"
                            type="number"
                            placeholder="Digite sua receita"
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            className="rounded-r-none"
                        />
                        <Button
                            onClick={() => addTransaction('income', income)}
                            className="bg-green-500 hover:bg-green-600 rounded-l-none"
                        >
                          Adicionar
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="expense" className="block text-sm font-medium text-gray-700">Despesa</label>
                      <div className="flex mt-1">
                        <Input
                            id="expense"
                            type="number"
                            placeholder="Digite sua despesa"
                            value={expense}
                            onChange={(e) => setExpense(e.target.value)}
                            className="rounded-r-none"
                        />
                        <Button
                            onClick={() => addTransaction('expense', expense)}
                            className="bg-red-500 hover:bg-red-600 rounded-l-none"
                        >
                          Adicionar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gráfico de Barras</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart width={300} height={200} data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Gráfico de Pizza</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <RechartsePieChart width={300} height={300}>
                    <Pie
                        data={chartData}
                        cx={150}
                        cy={150}
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsePieChart>
                </CardContent>
              </Card>
              <Card className="text-black">
                <CardHeader>
                  <CardTitle>Tabela de Transações</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell>{transaction.type === 'income' ? 'Receita' : 'Despesa'}</TableCell>
                            <TableCell>{transaction.amount.toFixed(2)}</TableCell>
                            <TableCell>{transaction.date}</TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Pronto para Transformar suas Finanças?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a milhares de usuários que já estão no controle de suas finanças com o FinancePro.
              Comece sua jornada para a liberdade financeira hoje!
            </p>
            <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300"
                onClick={() => window.location.href = 'https://finance-app-tau-flax.vercel.app/'}
            >
              Experimente<ArrowRight className="ml-2" />
            </Button>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-4">&copy; 2024 FinancePro. Todos os direitos reservados.</p>
            <p className="mb-4">Desenvolvido com ❤️ por <a href="https://github.com/JoaoIto" className="text-blue-400 hover:underline">@JoaoIto</a></p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-blue-400">Termos de Serviço</a>
              <a href="#" className="hover:text-blue-400">Política de Privacidade</a>
              <a href="#" className="hover:text-blue-400">Contato</a>
            </div>
          </div>
        </footer>
      </div>
  );
}

