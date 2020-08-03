var documenterSearchIndex = {"docs":
[{"location":"library/#Library-1","page":"Library","title":"Library","text":"","category":"section"},{"location":"library/#Directed-acyclic-graphs-(DAGs)-1","page":"Library","title":"Directed acyclic graphs (DAGs)","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"dsep\ncpdag\nvskel","category":"page"},{"location":"library/#CausalInference.dsep","page":"Library","title":"CausalInference.dsep","text":"dsep(g::AbstractGraph, u, v, s; verbose = false)\n\nCheck  whether u and v are d-separated given set s. Algorithm: unrolled https://arxiv.org/abs/1304.1505\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.cpdag","page":"Library","title":"CausalInference.cpdag","text":"cpdag(skel::DiGraph)\n\nReference: M. Chickering: Learning equivalence classes of Bayesian network structures. Journal of Machine Learning Research 2 (2002). M. Chickering: A Transformational Characterization of Equivalent Bayesian Network Structures. (1995).\n\nNote that the edge order defined there is already partly encoded into the representation of a DiGraph.\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.vskel","page":"Library","title":"CausalInference.vskel","text":"vskel(g)\n\nSkeleton and v-structures. (Currently from the first step of the pc-Alg.)\n\n\n\n\n\n","category":"function"},{"location":"library/#PC-algorithm-1","page":"Library","title":"PC algorithm","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"pcalg\nskeleton\ndseporacle\nunshielded\nplot_pc_graph","category":"page"},{"location":"library/#CausalInference.pcalg","page":"Library","title":"CausalInference.pcalg","text":"pcalg(n::V, I, par...)\n\nPerform the PC algorithm for a set of 1:n variables using the tests\n\nI(u, v, [s1, ..., sn], par...)\n\nReturns the CPDAG as DiGraph.   \n\n\n\n\n\npcalg(t, p::Float64, test::typeof(gausscitest); kwargs...)\n\nrun PC algorithm for tabular input data t using a p-value p to test for  conditional independeces using Fisher's z-transformation.\n\n\n\n\n\npcalg(t::T, p::Float64; cmitest::typeof(cmitest); kwargs...) where{T}\n\nrun PC algorithm for tabular input data t using a p-value p to detect  conditional independeces using a conditional mutual information permutation test.\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.skeleton","page":"Library","title":"CausalInference.skeleton","text":"skeleton(n, I) -> g, S\n\nPerform the undirected PC skeleton algorithm for a set of 1:n variables using the test I. Returns skeleton graph and separating set\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.dseporacle","page":"Library","title":"CausalInference.dseporacle","text":"dseporacle(i, j, s, g)\n\nOracle for the skeleton and pcalg functions using dsep on the true graph g\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.unshielded","page":"Library","title":"CausalInference.unshielded","text":"unshielded(g, S)\n\nFind unshielded triples in the skeleton. Triples are connected vertices v-w-z where z is not a neighbour of v. Uses that edges iterates in lexicographical order.\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.plot_pc_graph","page":"Library","title":"CausalInference.plot_pc_graph","text":"plot_pc_graph(g, df)\n\nplot the output of the PC algorithm.\n\n\n\n\n\n","category":"function"},{"location":"library/#Statistics-1","page":"Library","title":"Statistics","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"gausscitest\npartialcor\ncmitest","category":"page"},{"location":"library/#CausalInference.gausscitest","page":"Library","title":"CausalInference.gausscitest","text":"gausscitest(i, j, s, (C,n), c)\n\nTest for conditional independence of variable no i and j given variables in s with Gaussian test at the critical value c. C is covariance of n observations.\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.partialcor","page":"Library","title":"CausalInference.partialcor","text":"partialcor(i, j, s, C)\n\nCompute the partial correlation of nodes i and j given list of nodes s using the correlation matrix C.\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.cmitest","page":"Library","title":"CausalInference.cmitest","text":"cmitest(i,j,s,data,crit; kwargs...)\n\nTest for conditional independence of variables i and j given variables in s with permutation test using nearest neighbor conditional mutual information estimates at p-value crit.\n\nkeyword arguments: kwargs...: keyword arguments passed to independence tests\n\n\n\n\n\n","category":"function"},{"location":"library/#KL-Entropy-Estimators-1","page":"Library","title":"KL Entropy Estimators","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"n_ball\nkl_entropy\nkl_renyi\nkl_mutual_information\nkl_cond_mi\nkl_perm_mi_test\nkl_perm_cond_mi_test","category":"page"},{"location":"library/#CausalInference.n_ball","page":"Library","title":"CausalInference.n_ball","text":"n_ball(n::Number)\n\nComputes the volume of a n-dimensional unit sphere.\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.kl_entropy","page":"Library","title":"CausalInference.kl_entropy","text":"kl_entropy(data::Array{Float64, 2}; k=5)\n\nCompute the nearest-neighbor estimate of the differential entropy of data.\n\ndata is a 2d array, with every column representing one data point.  For further information, see\n\n\"A class of Rényi information estimators for multidimensional densities\" Nikolai Leonenko, Luc Pronzato, and Vippal Savani The Annals of Statistics, 2008 https://projecteuclid.org/euclid.aos/1223908088\n\nkeyword arguments: k=5: number of nearest neighbors\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.kl_renyi","page":"Library","title":"CausalInference.kl_renyi","text":"kl_renyi(data::Array{Float64, 2}, q; k=5)\n\nCompute the nearest-neighbor estimate of the Renyi-alpha entropy of data.\n\ndata is a 2d array, with every column representing one data point.  For further information, see\n\n\"A class of Rényi information estimators for multidimensional densities\" Nikolai Leonenko, Luc Pronzato, and Vippal Savani The Annals of Statistics, 2008 https://projecteuclid.org/euclid.aos/1223908088\n\nkeyword arguments: k=5: number of nearest neighbors\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.kl_mutual_information","page":"Library","title":"CausalInference.kl_mutual_information","text":"kl_mutual_information(x, y; k=5, bias_correction=true)\n\ncompute the nearest-neighbor 'KGS' estimate of the mutual information between x and y.\n\nx and y are 2d arrays, with every column representing one data point.  For further information, see\n\n\"Estimating Mutual Information\" Alexander Kraskov, Harald Stoegbauer, and Peter Grassberger Physical Review E https://arxiv.org/pdf/cond-mat/0305641.pdf\n\n\"Demystifying Fixed k-Nearest Neighbor Information Estimators\" Weihao Gao, Sewoong Oh, Pramod Viswanath EEE International Symposium on Information Theory - Proceedings https://arxiv.org/pdf/1604.03006.pdf\n\nkeyword arguments: k=5: number of nearest neighbors bias_correction=true: flag to apply Gao's bias correction\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.kl_cond_mi","page":"Library","title":"CausalInference.kl_cond_mi","text":"kl_cond_mi(x, y, z; k=5, bias_correction=true)\n\ncompute the nearest-neighbor 'KGS' estimate of the conditional mutual information between x and y given z.\n\nx, y, and z are 2d arrays, with every column representing one data point.  keyword arguments: k=5: number of nearest neighbors bias_correction=true: flag to apply Gao's bias correction\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.kl_perm_mi_test","page":"Library","title":"CausalInference.kl_perm_mi_test","text":"kl_perm_mi_test(x, y; k=5, B=100, bias_correction=true)\n\ncompute permutation test of independence of x and y.\n\nkeyword arguments: k=5: number of nearest neighbors to use for mutual information estimate B=100: number of permutations bias_correction=true: flag to apply Gao's bias correction\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.kl_perm_cond_mi_test","page":"Library","title":"CausalInference.kl_perm_cond_mi_test","text":"kl_perm_cond_mi_test(x, y, z; k=5, B=100, kp=5, bias_correction=true)\n\ncompute permutation test of conditional independence of x and y given z.\n\nFor further information, see: \"Conditional independence testing based on a nearest-neighbor estimator of conditional mutual information\" Jakob Runge Proceedings of the 21st International Conference on Artificial Intelligence and Statistics (AISTATS) 2018, Lanzarote, Spain. http://proceedings.mlr.press/v84/runge18a/runge18a.pdf\n\nkeyword arguments: k=5: number of nearest neighbors to use for mutual information estimate B=100: number of permutations bias_correction=true: flag to apply Gao's bias correction\n\n\n\n\n\n","category":"function"},{"location":"library/#FCI-algorithm-1","page":"Library","title":"FCI algorithm","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"has_marks\nset_marks!\nis_collider\nis_parent\nis_triangle\nis_discriminating_path\nis_uncovered_circle_path\nis_uncovered_PD_path\nfcialg\nplot_fci_graph","category":"page"},{"location":"library/#CausalInference.has_marks","page":"Library","title":"CausalInference.has_marks","text":"has_marks(dg, v1, v2, t::Tuple{Symbol, Symbol}\n\ntest if the edge between node v1 and v2 has the edge markers given by the tuple t (use the arrow macro to simplify use)\n\nExample: has_marks(dg, 1, 2, arrow\"o->\")\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.set_marks!","page":"Library","title":"CausalInference.set_marks!","text":"set_marks!(dg, v1, v2, t::Tuple{Symbol, Symbol})\n\nset edge marks between node v1 and v2.\n\nExample: set_marks!(dg, 1, 2, arrow\"*->\")\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.is_collider","page":"Library","title":"CausalInference.is_collider","text":"is_collider(dg, v1, v2, v3)\n\ncheck if egde v1, v2 and v3 form a collider\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.is_parent","page":"Library","title":"CausalInference.is_parent","text":"is_parent(dg, v1, v2)\n\ncheck if v1 is a parent of v2\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.is_triangle","page":"Library","title":"CausalInference.is_triangle","text":"is_triangle(dg, v1, v2, v3)\n\ncheck if v1, v2 and v3 form a triangle\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.is_discriminating_path","page":"Library","title":"CausalInference.is_discriminating_path","text":"is_discriminating_path(dg, path)\n\ncheck if path is a discriminating path\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.is_uncovered_circle_path","page":"Library","title":"CausalInference.is_uncovered_circle_path","text":"is_uncovered_circle_path(dg, path)\n\ncheck if path is an uncovered circle path\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.is_uncovered_PD_path","page":"Library","title":"CausalInference.is_uncovered_PD_path","text":"is_uncovered_PD_path(dg, path)\n\ncheck if path is an uncovered potentially directed path\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.fcialg","page":"Library","title":"CausalInference.fcialg","text":"fcialg(n::V, I, par...; augmented=true, verbose=false, kwargs...)\n\nPerform the FCI algorithm for a set of n variables using the test\n\nI(u, v, [s1, ..., sn], par...)\n\nReturns the PAG as a MetaDiGraph\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.plot_fci_graph","page":"Library","title":"CausalInference.plot_fci_graph","text":"plot_fci_graph(g, node_labels)\n\nplot the output of the FCI algorithm.\n\n\n\n\n\n","category":"function"},{"location":"library/#Miscellaneous-1","page":"Library","title":"Miscellaneous","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"digraph\nvpairs\npc_oracle\nskel_oracle\nranddag\nCausalInference.disjoint_sorted\nCausalInference.ordered_edges\nCausalInference.insorted\nCausalInference.removesorted!","category":"page"},{"location":"library/#CausalInference.digraph","page":"Library","title":"CausalInference.digraph","text":"digraph(E)\n\nCreate DiGraph from edge-list.\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.vpairs","page":"Library","title":"CausalInference.vpairs","text":"vpairs(g)\n\nReturn the edge-list as Pairs.\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.pc_oracle","page":"Library","title":"CausalInference.pc_oracle","text":"pc_oracle(g)\n\nCompute CPDAG using the PC algorithm using the dseporacle on the DAG g. \n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.skel_oracle","page":"Library","title":"CausalInference.skel_oracle","text":"skel_oracle(g)\n\nCompute the skeleton using the dseporacle for the DAG g.\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.randdag","page":"Library","title":"CausalInference.randdag","text":"randdag(n, alpha = 0.1)\n\nCreate random DAG from randomly permuted random triangular matrix with edge probability alpha.\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.disjoint_sorted","page":"Library","title":"CausalInference.disjoint_sorted","text":"disjoint_sorted(u, v)\n\nCheck if the intersection of sorted collections is empty. The intersection of empty collectios is empty.\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.ordered_edges","page":"Library","title":"CausalInference.ordered_edges","text":"ordered_edges(dag)\n\nIterator of edges of a dag, ordered in Chickering order:\n\nPerform a topological sort on the NODES\nwhile there are unordered EDGES in g\n    Let y be the lowest ordered NODE that has an unordered EDGE incident into it\n    Let x be the highest ordered NODE for which x => y is not ordered\n    return x => y \nend\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.insorted","page":"Library","title":"CausalInference.insorted","text":"insorted(a, x)\n\nCheck if x is in the sorted collection a\n\n\n\n\n\n","category":"function"},{"location":"library/#CausalInference.removesorted!","page":"Library","title":"CausalInference.removesorted!","text":"removesorted(collection, item) -> contains(collection, item)\n\nRemove item from sorted collection.\n\n\n\n\n\n","category":"function"},{"location":"#CausalInference.jl-1","page":"Home","title":"CausalInference.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A Julia package for causal inference, graphical models and structure learning with the PC algorithm. This package contains for now the classical (unstable) PC algorithm pcalg, tested on random DAGs by comparing the result of the PC algorithm using the d-separation oracle with the CPDAG computed with Chickering's DAG->CPDAG conversion algorithm (implemented as dsep and cpdag in this package).","category":"page"},{"location":"#","page":"Home","title":"Home","text":"See the Library for other implemented functionality.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The algorithms use the SimpleGraph and SimpleDiGraph graph representation of the Julia package LightGraphs. Both types of graphs are represented by sorted adjacency lists (vectors of vectors in the LightGraphs implementation).","category":"page"},{"location":"#","page":"Home","title":"Home","text":"CPDAGs are just modeled as SimpleDiGraphs, where unoriented edges are represented by a forward and a backward directed edge.","category":"page"},{"location":"#Example-1","page":"Home","title":"Example","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Compute skeleton graph h with separating sets S and CPDAG g from the 47x1190 data set NCI-60 on expression profiles of miRNAs and mRNAs.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using Distributions\nusing CausalInference\nusing LightGraphs\n\nusing DelimitedFiles, LinearAlgebra, Statistics\n\np = 0.01\n\n# Download data\nrun(`wget http://nugget.unisa.edu.au/ParallelPC/data/real/NCI-60.csv`)\n\n# Read data and compute correlation matrix\nX = readdlm(\"NCI-60.csv\", ',')\nd, n = size(X)\nC = Symmetric(cor(X, dims=2))\n\n# Compute skeleton `h` and separating sets `S`\nh, S = skeleton(d, gausscitest, (C, n), quantile(Normal(), 1-p/2))\n\n# Compute the CPDAG `g`\ng = pcalg(d, gausscitest, (C, n), quantile(Normal(), 1-p/2))","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Using data from T. D. Le, L. Liu et al.: Inferring microRNA–mRNA causal regulatory relationships from expression data, Bioinformatics, vol. 29, no. 6, 765–771, 2013.)","category":"page"},{"location":"#Performance-1","page":"Home","title":"Performance","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The speed of the algorithm is comparable with the C++ code of the R package pcalg after some pending optimizations.","category":"page"},{"location":"#Contribution-1","page":"Home","title":"Contribution","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"See issue #1 (Roadmap/Contribution) for questions and coordination of the development.","category":"page"},{"location":"#References-1","page":"Home","title":"References","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"D. M. Chickering: Learning Equivalence Classes of Bayesian-Network Structures. Journal of Machine Learning Research 2 (2002), 445-498.\nD. Colombo, M. H. Maathuis: Order-Independent Constraint-Based Causal Structure Learning. Journal of Machine Learning Research 15 (2014), 3921-3962.","category":"page"}]
}
