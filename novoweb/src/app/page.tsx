'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <motion.div 
          className="text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            クリエイティブな<br />ソリューションを提供
          </h1>
          <p className="text-xl mb-8">あなたのビジネスを次のレベルへ</p>
          <motion.button
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            お問い合わせ
            <ArrowRightIcon className="w-5 h-5 inline-block ml-2" />
          </motion.button>
        </motion.div>
      </section>

      {/* サービス紹介 */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">サービス</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Webデザイン", description: "モダンで使いやすいUIを提供" },
              { title: "アプリ開発", description: "スケーラブルなアプリケーション開発" },
              { title: "コンサルティング", description: "戦略的なアドバイスを提供" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 料金プラン */}
      <section className="py-20 px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">料金プラン</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "ベーシック", price: "¥50,000", features: ["基本機能", "メールサポート", "月次レポート"] },
              { name: "スタンダード", price: "¥100,000", features: ["拡張機能", "優先サポート", "週次ミーティング"] },
              { name: "プレミアム", price: "¥200,000", features: ["全機能利用可能", "24時間サポート", "専任マネージャー"] }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="w-full mt-8 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  選択する
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-center mb-16">お問い合わせ</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                お名前
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.name && <span className="text-red-500 text-sm">お名前は必須です</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.email && <span className="text-red-500 text-sm">有効なメールアドレスを入力してください</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                メッセージ
              </label>
              <textarea
                {...register("message", { required: true })}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.message && <span className="text-red-500 text-sm">メッセージは必須です</span>}
            </div>
            <motion.button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              送信する
            </motion.button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
