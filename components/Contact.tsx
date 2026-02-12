import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { 
  Home, Building2, Users, ArrowRight, ArrowLeft, CheckCircle2, 
  MapPin, ShieldAlert, Check, Loader2 
} from 'lucide-react';
import { cn } from '../utils';

type FormData = {
  // Step 1
  address: string;
  city: string;
  state: string;
  zip: string;
  occupancy: 'Occupied' | 'Vacant' | '';
  entryInstructions: string;
  relationship: string;
  // Step 2
  buildingType: 'Residential' | 'Commercial' | 'Multi-Family' | '';
  roofMaterial: string;
  workNeeded: string[];
  // Step 3
  leakStatus: string;
  leakLocation: string;
  notes: string;
  insuranceClaim: 'Yes' | 'No' | '';
  // Step 4
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  bestTime: string;
};

const INITIAL_DATA: FormData = {
  address: '', city: '', state: '', zip: '',
  occupancy: '',
  entryInstructions: '',
  relationship: '',
  buildingType: '',
  roofMaterial: '',
  workNeeded: [],
  leakStatus: '',
  leakLocation: '',
  notes: '',
  insuranceClaim: '',
  firstName: '', lastName: '', phone: '', email: '',
  bestTime: ''
};

export const Contact = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateData = (fields: Partial<FormData>) => {
    setData(prev => ({ ...prev, ...fields }));
  };

  const toggleWorkNeeded = (value: string) => {
    const current = data.workNeeded;
    if (current.includes(value)) {
      updateData({ workNeeded: current.filter(i => i !== value) });
    } else {
      updateData({ workNeeded: [...current, value] });
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // If we are not on the last step, just go to next step
    // This catches "Enter" key presses on inputs and validates current step
    if (step < 4) {
      nextStep();
      return;
    }

    // Final Step Submission
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu1.make.com/lo21eizms9w3xf8695ijl2bld33vu3qf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Logic: Check if Storm Damage is selected to show Insurance question in Step 3
  const isStormDamage = data.workNeeded.includes('Storm Damage');
  // Logic: Check if Vacant to hide Best Time in Step 4
  const isVacant = data.occupancy === 'Vacant';

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-zinc-950 text-white min-h-screen flex items-center" id="contact">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {isSubmitted ? (
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center max-w-xl mx-auto"
           >
             <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
               <CheckCircle2 className="w-12 h-12 text-green-500" />
             </div>
             <h2 className="text-3xl font-bold mb-4">Inspection Slot Secured</h2>
             <p className="text-zinc-400 text-lg mb-8">
               Thank you, {data.firstName}. We have received your request for {data.address}. An automated text has been sent to {data.phone} with your reference ID.
             </p>
             <Button onClick={() => { setIsSubmitted(false); setStep(1); setData(INITIAL_DATA); }} variant="secondary">
               Start New Request
             </Button>
           </motion.div>
        ) : (
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
            {/* Header / Progress */}
            <div className="bg-zinc-900 border-b border-zinc-800 p-8 flex items-center justify-between relative overflow-hidden">
               <div className="absolute top-0 left-0 h-1 bg-blue-600 transition-all duration-500 ease-out" style={{ width: `${(step / 4) * 100}%` }} />
               
               <div>
                 <span className="text-blue-500 font-mono text-xs uppercase tracking-wider font-bold mb-1 block">Step 0{step} of 04</span>
                 <h2 className="text-2xl font-bold text-white tracking-tight">
                    {step === 1 && "The Property"}
                    {step === 2 && "The Roof"}
                    {step === 3 && "The Damage"}
                    {step === 4 && "Schedule & Contact"}
                 </h2>
               </div>
               <div className="hidden md:block text-zinc-500 text-sm">
                 Estimated time: 2 min
               </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 md:p-12 min-h-[400px] flex flex-col relative">
              <AnimatePresence mode="wait" custom={step}>
                
                {/* STEP 1: PROPERTY */}
                {step === 1 && (
                  <motion.div key="step1" variants={variants} initial="enter" animate="center" exit="exit" custom={step} transition={{ duration: 0.3 }}>
                    <h3 className="text-xl text-zinc-300 mb-8 font-light">Let's locate the property.</h3>
                    
                    <div className="space-y-6">
                       <div className="space-y-4">
                          <input 
                            required 
                            placeholder="Address Line 1" 
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none transition-colors"
                            value={data.address}
                            onChange={(e) => updateData({ address: e.target.value })}
                          />
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                             <input placeholder="City" className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none" value={data.city} onChange={e => updateData({ city: e.target.value })}/>
                             <input placeholder="State" className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none" value={data.state} onChange={e => updateData({ state: e.target.value })}/>
                             <input placeholder="Zip Code" className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none col-span-2 md:col-span-1" value={data.zip} onChange={e => updateData({ zip: e.target.value })}/>
                          </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Is the property occupied?</label>
                           <div className="grid grid-cols-2 gap-2 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
                              {(['Occupied', 'Vacant'] as const).map(opt => (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => updateData({ occupancy: opt })}
                                  className={cn(
                                    "py-2 rounded-lg text-sm font-medium transition-all",
                                    data.occupancy === opt ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                                  )}
                                >
                                  {opt}
                                </button>
                              ))}
                           </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Your Relationship</label>
                            <select 
                              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 focus:border-blue-500 focus:outline-none appearance-none text-zinc-300"
                              value={data.relationship}
                              onChange={e => updateData({ relationship: e.target.value })}
                            >
                              <option value="">Select Option...</option>
                              <option value="Homeowner">Homeowner</option>
                              <option value="Real Estate Agent">Real Estate Agent</option>
                              <option value="Property Manager">Property Manager</option>
                              <option value="Insurance Adjuster">Insurance Adjuster</option>
                            </select>
                         </div>
                       </div>

                       <div className="space-y-2">
                          <label className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Entry Instructions</label>
                          <input 
                            placeholder="Gate codes, dog warnings, or 'No Access Issues'" 
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none"
                            value={data.entryInstructions}
                            onChange={(e) => updateData({ entryInstructions: e.target.value })}
                          />
                       </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: ROOF CONTEXT */}
                {step === 2 && (
                  <motion.div key="step2" variants={variants} initial="enter" animate="center" exit="exit" custom={step} transition={{ duration: 0.3 }}>
                    <h3 className="text-xl text-zinc-300 mb-8 font-light">Tell us about the structure.</h3>

                    <div className="space-y-8">
                      {/* Building Type Cards */}
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-500 uppercase font-bold tracking-wider block mb-3">Building Type</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { label: 'Residential', icon: Home },
                            { label: 'Commercial', icon: Building2 },
                            { label: 'Multi-Family', icon: Users },
                          ].map((type) => (
                            <button
                              key={type.label}
                              type="button"
                              onClick={() => updateData({ buildingType: type.label as any })}
                              className={cn(
                                "flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border transition-all duration-200",
                                data.buildingType === type.label 
                                  ? "bg-blue-600/10 border-blue-500 text-blue-400" 
                                  : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                              )}
                            >
                               <type.icon className="w-8 h-8" />
                               <span className="font-medium text-sm">{type.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Current Roof Material</label>
                         <select 
                              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none appearance-none text-zinc-300"
                              value={data.roofMaterial}
                              onChange={e => updateData({ roofMaterial: e.target.value })}
                            >
                              <option value="">Select Material...</option>
                              <option value="Asphalt Shingle">Asphalt Shingle</option>
                              <option value="Tile">Tile</option>
                              <option value="Metal">Metal</option>
                              <option value="Flat/TPO">Flat/TPO</option>
                              <option value="Not Sure">Not Sure</option>
                         </select>
                      </div>

                      <div className="space-y-2">
                         <label className="text-sm text-zinc-500 uppercase font-bold tracking-wider block mb-3">Work Needed</label>
                         <div className="flex flex-wrap gap-3">
                            {['Repair', 'Full Replacement', 'Gutters', 'Solar', 'Storm Damage'].map(item => (
                               <button
                                 key={item}
                                 type="button"
                                 onClick={() => toggleWorkNeeded(item)}
                                 className={cn(
                                   "px-4 py-2 rounded-full border text-sm font-medium transition-all flex items-center gap-2",
                                   data.workNeeded.includes(item)
                                     ? "bg-white text-black border-white"
                                     : "bg-transparent border-zinc-700 text-zinc-400 hover:border-zinc-500"
                                 )}
                               >
                                  {data.workNeeded.includes(item) && <Check className="w-3 h-3" />}
                                  {item}
                               </button>
                            ))}
                         </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: DAMAGE ASSESSMENT */}
                {step === 3 && (
                  <motion.div key="step3" variants={variants} initial="enter" animate="center" exit="exit" custom={step} transition={{ duration: 0.3 }}>
                    <h3 className="text-xl text-zinc-300 mb-8 font-light">What issues are you seeing?</h3>

                    <div className="space-y-6">
                       <div className="space-y-2">
                         <label className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Any Known Leaks?</label>
                         <select 
                              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none appearance-none text-zinc-300"
                              value={data.leakStatus}
                              onChange={e => updateData({ leakStatus: e.target.value })}
                            >
                              <option value="">Select Status...</option>
                              <option value="No Leaks">No Leaks</option>
                              <option value="Ceiling Spots">Ceiling Spots</option>
                              <option value="Active Dripping">Active Dripping</option>
                              <option value="Visible Daylight">Visible Daylight</option>
                         </select>
                       </div>

                       <div className="space-y-2">
                          <label className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Leak Location</label>
                          <input 
                            placeholder="e.g., 'Above the master bedroom'" 
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none"
                            value={data.leakLocation}
                            onChange={(e) => updateData({ leakLocation: e.target.value })}
                          />
                       </div>

                       {isStormDamage && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }} 
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-blue-900/10 border border-blue-900/30 p-6 rounded-xl"
                          >
                             <div className="flex items-start gap-3 mb-4">
                                <ShieldAlert className="w-5 h-5 text-blue-400 mt-0.5" />
                                <div>
                                   <label className="text-sm text-blue-200 font-bold block mb-1">Has an insurance claim been filed?</label>
                                   <p className="text-xs text-blue-400/70">This helps us prepare the right documentation.</p>
                                </div>
                             </div>
                             <div className="flex gap-4">
                                {(['Yes', 'No'] as const).map(opt => (
                                   <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                      <input 
                                        type="radio" 
                                        name="insurance"
                                        checked={data.insuranceClaim === opt}
                                        onChange={() => updateData({ insuranceClaim: opt })}
                                        className="w-4 h-4 accent-blue-500"
                                      />
                                      <span className="text-sm font-medium">{opt}</span>
                                   </label>
                                ))}
                             </div>
                          </motion.div>
                       )}

                       <div className="space-y-2">
                          <label className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Inspection Notes</label>
                          <textarea 
                            rows={3}
                            placeholder="Describe any specific concerns..." 
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none resize-none"
                            value={data.notes}
                            onChange={(e) => updateData({ notes: e.target.value })}
                          />
                       </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: CONTACT */}
                {step === 4 && (
                  <motion.div key="step4" variants={variants} initial="enter" animate="center" exit="exit" custom={step} transition={{ duration: 0.3 }}>
                    <h3 className="text-xl text-zinc-300 mb-8 font-light">Who should receive the report?</h3>

                    <div className="space-y-6">
                       <div className="grid grid-cols-2 gap-4">
                          <input required placeholder="First Name" className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none" value={data.firstName} onChange={e => updateData({ firstName: e.target.value })}/>
                          <input required placeholder="Last Name" className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none" value={data.lastName} onChange={e => updateData({ lastName: e.target.value })}/>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input required type="tel" placeholder="Phone Number" className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none" value={data.phone} onChange={e => updateData({ phone: e.target.value })}/>
                          <input required type="email" placeholder="Email Address" className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none" value={data.email} onChange={e => updateData({ email: e.target.value })}/>
                       </div>

                       {!isVacant && (
                         <div className="space-y-3">
                           <label className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Best Time to Contact</label>
                           <div className="flex flex-wrap gap-4">
                              {['Morning', 'Afternoon', 'Evening', 'Anytime'].map(time => (
                                 <label key={time} className="flex items-center gap-2 cursor-pointer group">
                                    <div className={cn(
                                       "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                                       data.bestTime === time ? "border-blue-500 bg-blue-500" : "border-zinc-700 group-hover:border-zinc-500"
                                    )}>
                                       {data.bestTime === time && <Check className="w-3 h-3 text-black" />}
                                    </div>
                                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                                       <input 
                                          type="radio" 
                                          className="hidden" 
                                          checked={data.bestTime === time} 
                                          onChange={() => updateData({ bestTime: time })}
                                       />
                                       {time}
                                    </span>
                                 </label>
                              ))}
                           </div>
                         </div>
                       )}

                       <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
                          <p className="text-xs text-zinc-500 leading-relaxed">
                            <ShieldAlert className="w-3 h-3 inline mr-1 -mt-0.5" />
                            By continuing, you agree to receive automated text updates regarding your estimate. Your data is encrypted and never sold.
                          </p>
                       </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-auto pt-8 flex items-center justify-between border-t border-zinc-800">
                {step > 1 ? (
                   <button 
                     type="button" 
                     onClick={prevStep}
                     className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors px-4 py-2"
                   >
                     <ArrowLeft className="w-4 h-4" /> Back
                   </button>
                ) : <div />}

                {step < 4 ? (
                   <Button 
                     type="submit" 
                     // Explicitly type submit to trigger browser validation on current fields
                     className="bg-white text-black hover:bg-zinc-200"
                   >
                     Next Step <ArrowRight className="w-4 h-4" />
                   </Button>
                ) : (
                   <Button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="bg-blue-600 text-white hover:bg-blue-500 border-none shadow-lg shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? (
                       <span className="flex items-center gap-2">
                         <Loader2 className="w-4 h-4 animate-spin" />
                         Sending...
                       </span>
                     ) : (
                       "Secure My Inspection Slot"
                     )}
                   </Button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};