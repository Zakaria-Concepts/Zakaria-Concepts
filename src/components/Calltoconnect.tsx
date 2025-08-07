import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToConnect = () => {
    return (
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
                        <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
                        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                            Ready to Build Something Great Together?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Whether you're a manufacturer seeking new markets or a distributor looking for quality products, we're here to create partnerships that drive mutual success. Let's explore how we can grow together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                Start a Conversation
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                                Learn About Our Services
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToConnect;